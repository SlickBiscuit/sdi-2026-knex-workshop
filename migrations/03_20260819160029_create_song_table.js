/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('song', table => {
        table.increments('SongID');
        table.integer('AlbumID').unsigned().notNullable();
        table.string('Title');
        table.foreign('AlbumID').references('AlbumID').inTable('album')
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.alterTable('song', table => {
        table.dropForeign('AlbumID')
    })
        .then(function () {
            return knex.schema.dropTableIfExists('song');
        });
};

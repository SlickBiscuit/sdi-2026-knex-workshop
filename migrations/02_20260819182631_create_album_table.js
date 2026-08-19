/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('album', table => {
        table.increments('AlbumID');
        table.integer('ArtistID').unsigned().notNullable();
        table.string('Title');
        table.date('ReleaseDate');
        table.foreign('ArtistID').references('ArtistID').inTable('artist')
    });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.alterTable('album', table => {
        table.dropForeign('ArtistID')
    })
        .then(function () {
            return knex.schema.dropTableIfExists('album');
        });
};

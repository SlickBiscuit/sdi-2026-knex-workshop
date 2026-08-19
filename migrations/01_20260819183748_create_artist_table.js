/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('artist', table => {
        table.increments('ArtistID');
        table.string('Name')
        table.string('Biography');
        table.string('Genre');
    });
}
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTableIfExists('artist');
};

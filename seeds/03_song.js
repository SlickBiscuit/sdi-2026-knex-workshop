/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  await knex("song").del();

  await knex("song").insert([
    {
      AlbumID: 1,
      Title: "Floods"
    },
    {
      AlbumID: 2,
      Title: "High Rate Extinction"
    },
    {
      AlbumID: 3,
      Title: "The Destruction of a Person"
    }
  ]);
};

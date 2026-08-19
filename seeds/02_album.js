/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  await knex("album").del();

  await knex("album").insert([
    {
      ArtistID: 1,
      Title: "The Great Southern Trendkill",
      ReleaseDate: "1996-05-07"
    },
    {
      ArtistID: 2,
      Title: "Crowbar",
      ReleaseDate: "1993-10-12"
    },
    {
      ArtistID: 3,
      Title: "A Lethal Dose of American Hatred",
      ReleaseDate: "2003-07-22"
    }
  ]);
};

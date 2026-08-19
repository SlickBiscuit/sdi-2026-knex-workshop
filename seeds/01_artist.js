/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  await knex("artist").del();

  await knex("artist").insert([
    {
      Name: "Pantera",
      Biography: "American heavy metal band from Arlington, Texas",
      Genre: "Groove Metal"
    },
    {
      Name: "Crowbar",
      Biography: "American sludge metal band from New Orleans, Louisiana",
      Genre: "Sludge Metal"
    },
    {
      Name: "Superjoint Ritual",
      Biography: "American crossover metal band formed by Phil Anselmo and Hank III",
      Genre: "Crossover Metal"
    }
  ]);
};

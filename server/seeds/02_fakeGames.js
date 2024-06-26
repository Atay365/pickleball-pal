/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function sedd(knex) {
  // Deletes ALL existing entries
  await knex("games").del();
  await knex("games").insert([
    { id: 1, colName: "rowValue1" },
    { id: 2, colName: "rowValue2" },
    { id: 3, colName: "rowValue3" },
  ]);
}

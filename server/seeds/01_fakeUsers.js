/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function sedd(knex) {
  // Deletes ALL existing entries
  await knex("users").del();
  await knex("users").insert([
    { id: 1, colName: "rowValue1" },
    { id: 2, colName: "rowValue2" },
    { id: 3, colName: "rowValue3" },
  ]);
}

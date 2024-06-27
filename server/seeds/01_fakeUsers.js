/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("users").del();
  await knex("users").insert([
    {
      id: 1,
      first_name: "John",
      last_name: "Doe",
      email: "john.doe@example.com",
      password: "password123",
      created_at: new Date("2024-06-01T00:00:00Z"),
    },
    {
      id: 2,
      first_name: "Jane",
      last_name: "Smith",
      email: "jane.smith@example.com",
      password: "password123",
      created_at: new Date("2024-06-01T00:00:00Z"),
    },
    {
      id: 3,
      first_name: "Alice",
      last_name: "Johnson",
      email: "alice.johnson@example.com",
      password: "password123",
      created_at: new Date("2024-06-01T00:00:00Z"),
    },
    {
      id: 4,
      first_name: "Bob",
      last_name: "Brown",
      email: "bob.brown@example.com",
      password: "password123",
      created_at: new Date("2024-06-01T00:00:00Z"),
    },
    {
      id: 5,
      first_name: "Charlie",
      last_name: "Davis",
      email: "charlie.davis@example.com",
      password: "password123",
      created_at: new Date("2024-06-01T00:00:00Z"),
    },
  ]);
}

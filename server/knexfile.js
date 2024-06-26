// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
export default {
  client: "mysql2",
  connection: {
    host: "127.0.0.1",
    user: "root",
    password: "rootroot",
    database: "pickle_pal",
    charset: "utf8",
  },
};

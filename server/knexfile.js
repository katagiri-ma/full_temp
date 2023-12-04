// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "pg",
    connection: {
      // ここにローカルのデータベースの設定
      user: process.env.POSTGRES_USER || "user",
      // database: process.env.POSTGRES_DB || 'taskmane',
      database: "taskmane2",
    },
    migrations: {
      directory: "./db/migrations",
    },
    seeds: { directory: "./db/seeds" },
    // ...
  },
  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: "./db/migrations",
    },
    seeds: { directory: "./db/seeds" },
    // ...
  },
};

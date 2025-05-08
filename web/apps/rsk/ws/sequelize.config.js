/* eslint-env node */
module.exports = {
  development: {
    username: 'ditenderdbuser',
    password: 'w68CBFM^DY4Eu@AaqchYPAsq',
    database: 'di-tender-db-island-is',
    host: 'di-tender-dev-psql-eu.postgres.database.azure.com',
    port: 5432,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: false, // This will help you. But you will see nwe error
        rejectUnauthorized: false // This line will fix new error
      }
    },
  },
  test: {
    username: 'test_db',
    password: 'test_db',
    database: 'test_db',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres',
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'postgres',
  },
}

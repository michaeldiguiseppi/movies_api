
// Update with your config settings.


module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost:5432/movie_api',
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
  }
};

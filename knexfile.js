
// Update with your config settings.


module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost:5432/movie_api',
  },

  production: {
    client: 'pg',
    connection: {
      database: 'movie_api_prod',
      user: 'ec2-user',
    }
  }
};

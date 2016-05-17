var seeder = require('knex-csv-seeder').seeder.seed;

exports.seed = seeder({
  table: 'movies',
  file: 'seeds/dvd_csv.csv',
  recordsPerQuery: 500,
});

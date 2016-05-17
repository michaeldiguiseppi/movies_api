
exports.up = function(knex, Promise) {
  return knex.schema.createTable('movies', function(table) {
    table.increments();
    table.string('DVD_Title');
    table.string('Studio');
    table.string('Released');
    table.string('Status');
    table.string('Sound');
    table.string('Versions');
    table.float('Price');
    table.string('Rating');
    table.string('Year');
    table.string('Genre');
    table.string('Aspect');
    table.string('UPC');
    table.dateTime('DVD_ReleaseDate');
    table.integer('ID');
    table.dateTime('Timestamp');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('movies');
};

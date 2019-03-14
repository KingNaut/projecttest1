
exports.up = function(knex, Promise) {
    return knex.schema.createTable('roles', function(table){
        table.increments('id');
        table.string('name');
        table.timestamps();
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('roles');
};

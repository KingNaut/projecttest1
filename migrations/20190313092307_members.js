
exports.up = function(knex, Promise) {
    return knex.schema.createTable('members', function(table){
        table.increments('id');
        table.string('login_id');
        table.string('nickname');
        table.timestamps(); 
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('members');
};

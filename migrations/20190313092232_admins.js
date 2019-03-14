
exports.up = function(knex, Promise) {
    return knex.schema.createTable('admins', function(table){
        table.increments('id');
        table.string('user_name');
        table.string('emai_user');
        table.string('password');
        table.string('role_id');
        table.timestamps(); 
    })
};

exports.down = function(knex, Promise) {
    return  knex.schema.dropTable('admins');
  
};

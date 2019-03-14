
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('members').truncate() 
    .then(function () {
      // Inserts seed entries
      return knex('members').insert([
        {login_id: "loginid1",nickname: "kingnaut", created_at: knex.fn.now(),updated_at: knex.fn.now()},
        {login_id: "loginid2",nickname: "kingnaut2", created_at: knex.fn.now(),updated_at: knex.fn.now()},
      ]);
    });
};

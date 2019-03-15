
exports.seed = function(knex, Promise) {
  return knex('members').truncate() 
    .then(function () {
      return knex('members').insert([
        {login_id: "loginid1",nickname: "kingnaut", created_at: knex.fn.now(),updated_at: knex.fn.now()},
        {login_id: "loginid2",nickname: "kingnaut2", created_at: knex.fn.now(),updated_at: knex.fn.now()},
      ]);
    });
};

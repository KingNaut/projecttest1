
exports.seed = function(knex, Promise) {
  return knex('admins').truncate()
    .then(function () {
      return knex('admins').pluck('id').then((roleIds) => {
        var admins =[];
        for(let index=0;index<=2;index++)
        {
            admins.push({
                emai_user: "nameuser" + index + "@gmail.com",
                user_name: "nameuser" + index,
                role_id: roleIds[Math.floor(Math.random()*roleIds.length)],
                created_at: knex.fn.now(),
                updated_at: knex.fn.now(), 

            })
        }
        return  knex('admins').insert(admins);
      });
      
    });
};

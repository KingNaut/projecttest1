const knex = require('../../connectors');
var bookshelf = require('bookshelf')(knex);
var Admin = bookshelf.Model.extend({
    tableName: 'admins'
});

module.exports = {
    getAllAdmins: () => Admin.fetchAll().then(function(models) {
        return models.serialize();
    }),
    createAdmin: input => {
        if (input) {
            return new Admin(input).save().then(function(model) {
                return model;
            });
        }
        return false;
    },
    deleteAdmin: id => {
        if (id) {
            return Admin.where('id', id).del();
        }
        return false;
    },
    updateAdmin: (id, input) => {
        if (id) {
            return Admin.where('id', id).set(input).save(null, {method: 'update'});
        }
        return false;
    }
}

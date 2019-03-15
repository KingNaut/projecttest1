var knex = require('../connectors');
module.exports = {
    getAllMembers: function () { return knex('members').select(); },
    createMember: function (input) {
        if (input) {
            return knex('members').insert(input).then(function (result) {
                return knex('members').where('id', result[0]).first();
            });
        }
        return false;
    },
    deleteMember: function (id) {
        if (id) {
            return knex('members').where('id', id).del();
        }
        return false;
    },
    updateMember: function (id, input) {
        if (id) {
            return knex('members').where('id', id).update(input);
        }
        return false;
    }
};

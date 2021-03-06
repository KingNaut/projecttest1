const MemberModel = require('models/member.js');

module.exports = {
    Query: {
        getAllMembers: () => MemberModel.getAllMembers(),
    },
    Mutation: {
        createMember(root, { input }) {
            return MemberModel.createMember(input);
        },
        deleteMember(root, { id }) {
            return MemberModel.deleteMember(id);
        },
        updateMember(root, { id, input }) {
            if (id) {
                return MemberModel.updateMember(id, input);
            }
            return false;
        }
    }
}

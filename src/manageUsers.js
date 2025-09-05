const users = ['Matthew', 'Mark', 'Luke', 'John'];

function returnUsers() {
    return users;
};

function addNewUser(name) {
    users.push(name);
};

module.exports = {
    returnUsers,
    addNewUser
}
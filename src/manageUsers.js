const users = [
                {
                    name: 'Matthew',
                    email: 'matthew@disciples.org'
                },
                {
                    name: 'Mark',
                    email: 'mark@disciples.org'
                }, 
                {
                    name: 'Luke',
                    email: 'luke@disciples.org'
                }, 
                {
                    name: 'John',
                    email: 'john@disciples.org'
                }
            ];

function returnUsers() {
    return users;
};

function addNewUser(user) {
    users.push(user);
};

module.exports = {
    returnUsers,
    addNewUser
}
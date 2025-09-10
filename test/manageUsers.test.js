const { returnUsers, addNewUser } = require('../src/manageUsers');
const { expect } = require('chai');

describe('Test the functions for Managing Users', ()=>{
    it('Validates that I\'m able to add a new name to the user list', () => {
        addNewUser({name: 'Judas', email:'judas@disciples.org'});
        const userList = returnUsers();
        expect(userList.at(-1).name).to.equal('Judas');
        expect(userList.at(-1).email).to.equal('judas@disciples.org');
        // .to.eql works in the same way as .to.deep.equal; used to compare objects
        expect(userList.at(-1)).to.eql({name: 'Judas', email:'judas@disciples.org'});
    })
})
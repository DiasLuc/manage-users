const { returnUsers, addNewUser } = require('../src/manageUsers');
const { expect } = require('chai');

describe('Test the functions for Managing Users', ()=>{
    it('Validates that I\'m able to add a new name to the user list', () => {
        addNewUser('Judas');
        const userList = returnUsers();
        expect(userList.at(-1)).to.equal('Judas');
    })
})
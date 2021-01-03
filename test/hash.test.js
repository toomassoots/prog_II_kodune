const hashService =require('../api/service/hashService');
const {assert}= require('chai');
const bcrypt = require('bcrypt');

const password ='atspaat';
const wrongpassword ='petspaat';
describe('Hash service', function(){
    describe('Hash', function(){
        it('should return  hashed password', async function(){
            const hash = await hashService.hash(password);
            const match = await bcrypt.compare(password, hash);
            assert.isTrue(match);
        })
        it('should return false, worng password', async function(){
            const hash = await hashService.hash(password);
            const match = await bcrypt.compare(wrongpassword, hash);
            assert.isTrue(match);
        })
    })
})

const hashService = require("./hashService");
const usersService = require("./usersService");
const jwt = require('jsonwebtoken');
const config = require('../../config');
const authService ={}
 
authService.login= async (email, password) =>{
    const user = usersService.readByEmail(email);
    if(user){
        const match = await hashService.compare(password, user.password)
        if(match){
            return true
        }
    }else{
        return false;
    }
}

module.exports=authService;
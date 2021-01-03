
const hashService = require("./hashService");
const usersService = require("./usersService");
const jwt = require('jsonwebtoken');
const config = require('../../config');
const authService ={}
 
authService.login= async (email, password) =>{
    const user = await usersService.readByEmail(email);

    console.log(user)

    if(user){
       
        const match = await hashService.compare(password, user.password)
        if(match){
            const token = jwt.sign({id: user.readByEmail},config.jwtSecret, {expiresIn: 60*60*24}) 
            return token;
        }else{
            return false;
        }
    }else{
        return false;
    }
}

module.exports=authService;
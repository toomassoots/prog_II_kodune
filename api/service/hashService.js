const bcrypt  = require('bcrypt');
//const  {saltRounds} = require('../../config.js');

const hashService =  {
    
}
hashService.hash=async(password)=>{
    
    const hash = await bcrypt.hashSync(password, 10);
    return hash;
}
hashService.compare = async(password, hash)=>{
    const match = await bcrypt.compare(password, hash);
    return match;
}
module.exports=hashService;
const bcrypt  = require('bcrypt');
const  saltRounds = 10;

const hashService =  {
    
}
hashService.hash=async(password)=>{
    
    const hash = await bcrypt.hashSync(password, saltRounds);
    console.log(hash)
    return hash;
}
hashService.compare = async(password, hash)=>{
    const match = await bcrypt.compare(password, hash);
}
module.exports=hashService;
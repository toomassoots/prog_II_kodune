
const hashService=require("./hashService")

 
const db = require('../../db.js');

usersService=  {};

usersService.read =async()=>{
    const users= await db.query('SELECT kasutajad_id, name, email, phone FROM users WHERE active=1')
    return users;
}
usersService.user =async(userId)=>{
    console.log(userId);
    const doc = await db.collection('users').doc(userId).get();
    console.log(doc)
    if(!doc.exists){
        console.log("No such document");
        return false;
    }
        const user=doc.data();
        console.log(user);

    return user;
}
usersService.create=async (user)=>{
    user.password=await hashService.hash(user.password);
    // Add user to 'database'
    console.log(user.password)
    const result = await db.query('INSERT INTO users SET?', [user]);
    
    console.log(result);
    // Create new json from newUser for response
    if(result.affectedRows ===0){
        return false;
    }
    //console.log(userToReturn)
    // Remove password from user data
    //delete userToReturn.password;
    return result.insertId;

}
usersService.update= async (user)=>{
    let update={};
        // Check if optional data exists
        if (user.firstName) {
            // Change user data in 'database'
           update.firstName = user.firstName;
        }
        // Check if optional data exists
        if (user.lastName) {
            // Change user data in 'database'
            update.lastName = user.lastName;
        }
        // Check if optional data exists
        if (user.email) {
            // Change user data in 'database'
            update.email = user.email;
        }
        // Check if optional data exists
        if (user.password) {
            // Change user data in 'database'
            
            update.password = await hashService.hash(user.password);
        }
        await db.collection('users').doc(user.id).update(update);
        return true;
}
usersService.readByEmail=async(email)=>{

    if(!email) return false;

    const users = await db.query('SELECT * FROM users WHERE email=?', [email])
    if(users.lenght<1) return false;
    console.log(users[0])
    return users[0];

}
module.exports= usersService;
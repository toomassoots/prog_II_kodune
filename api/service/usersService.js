
const hashService=require("./hashService")

const usersService={};
const db = require('../../db.js');

usersService.read =async()=>{
    const usersRef = db.collection('users')
    const snapshot = await usersRef.get();
    const users = snapshot.docs.map(doc=>({
        id: doc.id,
        ...doc.data()
    }))
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
    const res = await db.collection('users').doc(user.email).set(user)
    console.log(res);
    // Create new json from newUser for response
    const userToReturn = { ... user };

    console.log(userToReturn)
    // Remove password from user data
    //delete userToReturn.password;
    return userToReturn

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
    const userRef = db.collection('users');
    const snapshot = await usersRef.where('email', '==', email).get();
    if(snapshot.empty){
        console.log('No matching user.');
        return;
    }
    const user = snapshot.docs[0].data();
    return user
}
module.exports= usersService;
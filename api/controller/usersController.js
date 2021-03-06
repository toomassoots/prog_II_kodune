const usersService = require('../service/usersService')
const usersController= {};
usersController.read =async (req, res) => {
    // Return list of users
    const users =  await usersService.read();
    res.status(200).json({
        success: true,
        users: users
    });
}
usersController.user=async(req, res) => {
    // Return user with specified id
    const userId= req.params.id
    const users= await usersService.user(userId)
    res.status(200).json({
        success: true,
        user: users
    });
}

usersController.userByEmail=async(req, res)=>{
    const email = req.params.email
    console.log(email)
    const user= await usersService.readByEmail(email)
    res.status(200).json({
        success: true,
        user: user
    })
}
usersController.create=async (req, res) => {
    // Check if provided data is expected type (typeof) and has length when whitespace is removed (.trim().length)
    const name = typeof(req.body.name) === 'string' && req.body.name.trim().length > 0 ? req.body.name : false;
    const email = typeof(req.body.email) === 'string' && req.body.email.trim().length > 0 ? req.body.email : false;
    const phone = typeof(req.body.phone) === 'number'? req.body.phone : false;
    const address= typeof(req.body.address) === 'string' && req.body.address.trim().length? req.body.address: false;
    const password = typeof(req.body.password) === 'string' && req.body.password.trim().length > 2 ? req.body.password : false;

    // Check if required data exists
    if (name && email && phone && password) {
        // Create new json with user data
        
        const user = {
            name,
            email,
            phone,
            address,
            password
        };
        const newUser  = await usersService.create(user);
        // Return data
        res.status(201).json({
            success: true,
            user: newUser
        });
    } else {
        // Return error message
        res.status(400).json({
            success: false,
            message: 'Required field(s) missing or invalid'
        });
    }
}
usersController.update= async(req, res) => {
    // Next lines checking if provided data is expected type (typeof) and has length when whitespace is removed (.trim().length)
    // Ternary operator: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
    const id = typeof(req.body.id) === 'string' ? req.body.id : false;
    /* Same as:
    let id;
     if (typeof(req.body.id) === 'number') {
        id = req.body.id
     } else {
         id = false;
     }
     */
    if(id || id === 0) {
     const firstName = typeof(req.body.firstName) === 'string' && req.body.firstName.trim().length > 0 ? req.body.firstName : false;
    const lastName = typeof(req.body.lastName) === 'string' && req.body.lastName.trim().length > 0 ? req.body.lastName : false;
    const email = typeof(req.body.email) === 'string' && req.body.email.trim().length > 0 ? req.body.email : false;
    const password = typeof(req.body.password) === 'string' && req.body.password.trim().length > 3 ? req.body.password : false;
    // Check if required data exists
    
    
    const user = {
        id,
        firstName,
        lastName,
        email,
        password
    };

    const updatedUser =  await usersService.update(user);
        // Return updated user data
        res.status(200).json({
            success: true,
            user: updatedUser
        });
   
} else {
    // Return error message
    res.status(400).json({
        success: false,
        message: 'Required field(s) missing or invalid'
    });
}
}
usersController.delete=async(req, res) => {
    // Check if required data exists
    const id = typeof(req.body.id) === 'number' ? req.body.id : false;

    if(id || id === 0) {
        users.splice(id, 1);
        const result= await usersService.delete(usersID)
        // Return success message
        res.status(200).json({
            success: result
        });
    } else {
        // Return error message
        res.status(400).json({
            success: false,
            message: 'Required field(s) missing or invalid'
        });
    }
}
module.exports= usersController;



const ordersService = require('../service/ordersService')
const ordersController= {};
ordersController.read = (req, res) => {
    
    const orders = ordersService.read();
    res.status(200).json({
        success: true,
        orders: orders
    });
}
ordersController.order=(req, res) => {
   
    const userId= req.params.id
    const users= usersService.user(userId)
    res.status(200).json({
        success: true,
        user: users
    });
}
ordersController.create= (req, res) => {
    const firstName = typeof(req.body.firstName) === 'string' && req.body.firstName.trim().length > 0 ? req.body.firstName : false;
    const lastName = typeof(req.body.lastName) === 'string' && req.body.lastName.trim().length > 0 ? req.body.lastName : false;
    const email = typeof(req.body.email) === 'string' && req.body.email.trim().length > 0 ? req.body.email : false;
    const password = typeof(req.body.password) === 'string' && req.body.password.trim().length > 2 ? req.body.password : false;

    if (firstName && lastName && email && password) {
        
        const user = {
            firstName,
            lastName,
            email,
            password
        };
        const newUser  = usersService.create(user);
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
ordersController.update=(req, res) => {
    // Next lines checking if provided data is expected type (typeof) and has length when whitespace is removed (.trim().length)
    // Ternary operator: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
    const id = typeof(req.body.id) === 'number' ? req.body.id : false;
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
    
    
    const order = {
        id,
        firstName,
        lastName,
        email,
        password
    };

    const updatedOrder = ordersService.update(order);
        // Return updated user data
        res.status(200).json({
            success: true,
            order: updatedOrder
        });
   
} else {
    // Return error message
    res.status(400).json({
        success: false,
        message: 'Required field(s) missing or invalid'
    });
}
}
ordersController.delete=(req, res) => {
    // Check if required data exists
    const id = typeof(req.body.id) === 'number' ? req.body.id : false;
    if(id || id === 0) {
        orders.splice(id, 1);
        // Return success message
        res.status(200).json({
            success: true
        });
    } else {
        // Return error message
        res.status(400).json({
            success: false,
            message: 'Required field(s) missing or invalid'
        });
    }
}
module.exports= ordersController;



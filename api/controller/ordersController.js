const ordersService = require('../service/ordersService')
const ordersController= {};
ordersController.allOrders =async (req, res) => {
    
    const orders = await ordersService.allOrders();
    res.status(201).json({
        success: true,
        orders: orders
    });
}
ordersController.order= async(req, res) => {
   
    const orderId= req.params.id
    const order=  await ordersService.order(orderId)
    res.status(200).json({
        success: true,
        order: order
    });
}
ordersController.activeOrders= async(req, res) => {
   

    const orders= await ordersService.activeOrders();
    res.status(200).json({
        success: true,
        order: orders
    });
}
ordersController.create= async (req, res) => {
    const booking_time = typeof(req.body.booking_time) === 'string' && req.body.booking_time.trim().length > 0 ? req.body.booking_time : false;
    const cars_id = typeof(req.body.cars_id) === 'number'? req.body.cars_id : false;
    const wash_types_id = typeof(req.body.wash_types_id) === 'number'? req.body.wash_types_id : false;
    const users_kasutajad_id = typeof(req.body.users_kasutajad_id) === 'number'? req.body.users_kasutajad_id : false;
    if (booking_time && cars_id && wash_types_id && users_kasutajad_id) {
        
        const order = {
            booking_time,
            cars_id, 
            wash_types_id,
            users_kasutajad_id

        };
        const newOrder  = await ordersService.create(order);
        // Return data
        res.status(201).json({
            success: true,
            order: newOrder
        });
    } else {
        // Return error message
        res.status(400).json({
            success: false,
            message: 'Required field(s) missing or invalid'
        });
    }
}
ordersController.update=async (req, res) => {
    // Next lines checking if provided data is expected type (typeof) and has length when whitespace is removed (.trim().length)
    // Ternary operator: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
    const id = req.params.id
    console.log(id);
    if(id || id === 0) {
        const booking_time = typeof(req.body.booking_time) === 'string' && req.body.booking_time.trim().length > 0 ? req.body.booking_time : false;
        const canceled = typeof(req.body.canceled) === 'number'? req.body.canceled : false;
        const cars_id = typeof(req.body.cars_id) === 'number'? req.body.cars_id : false;
        const wash_types_id = typeof(req.body.wash_types_id) === 'number'? req.body.wash_types_id : false;
        const active = typeof(req.body.active) === 'number'? req.body.active : false;
    // Check if required data exists
    
    
    const order = {
        id,
        booking_time,
        canceled,
        cars_id, 
        wash_types_id,
        active 
    };
    const updatedOrder = await ordersService.update(order);
        // Return updated user data
        res.status(200).json({
            success: true,
            orders: order
        });
   
} else {
    // Return error message
    res.status(400).json({
        success: false,
        message: 'Required field(s) missing or invalid'
    });
}
}
ordersController.delete=async(req, res) => {
    // Check if required data exists
    const id = typeof(req.body.id) === 'number' ? req.body.id : false;
    if(id || id === 0) {
        orders.splice(id, 1);
        const result= await ordersService.delete(id)
   
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
module.exports= ordersController;



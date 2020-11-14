const washService = require('../service/washService')
const washController= {};
washController.read = (req, res) => {
    // Return list of users
    const washes = washService.read();
    res.status(200).json({
        success: true,
        wash: washes
    });
}
washController.wash=(req, res) => {
    // Return user with specified id
    const washId= req.params.id
    const washes= washService.wash(washId)
    res.status(200).json({
        success: true,
        wash: washes
    });
}
washController.create= (req, res) => {
    // Check if provided data is expected type (typeof) and has length when whitespace is removed (.trim().length)
    const name = typeof(req.body.name) === 'string' && req.body.name.trim().length > 0 ? req.body.name : false;
    const price = typeof(req.body.price) === 'number' ? req.body.price : false;
    const description = typeof(req.body.description) === 'string' && req.body.description.trim().length > 0 ? req.body.description : false;
   

    // Check if required data exists
    if (name && price && description) {
        // Create new json with user data
        
        const wash = {
            
            name,
            price,
            description,
        };
        const newWash  = washService.create(wash);
        // Return data
        res.status(201).json({
            success: true,
            wash: newWash
        });
    } else {
        // Return error message
        res.status(400).json({
            success: false,
            message: 'Required field(s) missing or invalid'
        });
    }
}
washController.update=(req, res) => {
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
        const name = typeof(req.body.name) === 'string' && req.body.name.trim().length > 0 ? req.body.name : false;
        const price = typeof(req.body.price) === 'number' ? req.body.price : false;
        const description = typeof(req.body.description) === 'string' && req.body.description.trim().length > 0 ? req.body.description : false;
    // Check if required data exists
    
    
    const wash = {
        id,
        name,
        price,
        description
    };

    const updatedWash = washService.update(wash);
        // Return updated user data
        res.status(200).json({
            success: true,
            wash: updatedWash
        });
   
} else {
    // Return error message
    res.status(400).json({
        success: false,
        message: 'Required field(s) missing or invalid'
    });
}
}
washController.delete=(req, res) => {
    // Check if required data exists
    const id = typeof(req.body.id) === 'number' ? req.body.id : false;
    if(id || id === 0) {
        washes.splice(id, 1);
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
module.exports= washController;



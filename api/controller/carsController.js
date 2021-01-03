const carsService = require('../service/carsService')
const carsController= {};

carsController.mycars =async (req, res) => {
    const userId= 5;
    const cars = await carsService.mycars(userId);
    res.status(201).json({
        success: true,
        cars: cars
    });
}
carsController.car= async(req, res) => {
   
    const carId= req.params.id
    const car=  await carsService.car(carId)
    res.status(200).json({
        success: true,
        car: car
    });
}

carsController.create= async (req, res) => {
    const licence_plate = typeof(req.body.licence_plate) === 'string' && req.body.licence_plate.trim().length > 0 ? req.body.licence_plate : false;
    const active = typeof(req.body.active) === 'number'? req.body.active : false;
    const make =  typeof(req.body.make) === 'string' && req.body.make.trim().length > 0 ? req.body.make : false;
    const model =  typeof(req.body.model) === 'string' && req.body.model.trim().length > 0 ? req.body.model : false;
    const car_type_id = typeof(req.body.car_type_id) === 'number'? req.body.car_type_id : false;
    if (licence_plate && active && make && model && car_type_id) {
        
        const car = {
            licence_plate,
            active, 
            make,
            model,
            car_type_id

        };
        const newCar  = await carsService.create(car);
        // Return data
        res.status(201).json({
            success: true,
            car: newCar
        });
    } else {
        // Return error message
        res.status(400).json({
            success: false,
            message: 'Required field(s) missing or invalid'
        });
    }
}
carsController.update=async (req, res) => {
    // Next lines checking if provided data is expected type (typeof) and has length when whitespace is removed (.trim().length)
    // Ternary operator: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
    const id = req.params.id
    console.log(id);
    if(id || id === 0) {
    const licence_plate = typeof(req.body.licence_plate) === 'string' && req.body.licence_plate.trim().length > 0 ? req.body.licence_plate : false;
    const active = typeof(req.body.active) === 'number'? req.body.active : false;
    const make =  typeof(req.body.make) === 'string' && req.body.make.trim().length > 0 ? req.body.make : false;
    const model =  typeof(req.body.model) === 'string' && req.body.model.trim().length > 0 ? req.body.model : false;
    const car_type_id = typeof(req.body.car_type_id) === 'number'? req.body.car_type_id : false;
    // Check if required data exists
    
    
    const car = {
        id,
        licence_plate,
        active, 
        make,
        model,
        car_type_id
    };
    const cars = await ordersService.update(car);
        // Return updated user data
        res.status(200).json({
            success: true,
            car: cars
        });
   
} else {
    // Return error message
    res.status(400).json({
        success: false,
        message: 'Required field(s) missing or invalid'
    });
}
}
carsController.delete=async(req, res) => {
    // Check if required data exists
    const id = typeof(req.body.id) === 'number' ? req.body.id : false;
    if(id || id === 0) {
        cars.splice(id, 1);
        const result= await carsService.delete(id)
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

module.exports= carsController;



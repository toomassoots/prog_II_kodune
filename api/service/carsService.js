
const db = require('../../db.js');

const carsService={};


carsService.mycars =async (userid)=>{
    const cars = await db.query('select cars.licence_plate, cars.make, cars.model ,car_type.car_type from(cars inner join car_type on cars.car_type_id =car_type.car_type_id)  where cars.active=1 and users_kasutajad_id=? ', [userid]);
    return cars;
}
carsService.car=async(carId)=>{
    const cars= await db.query('SELECT * FROM cars WHERE car_id=?', [carId])
    return cars;
}

carsService.create=async(car)=>{
    const carsResult= await db.query('INSERT INTO cars SET?',[car])
    
    if(carsResult.affectedRows ===0){
        return false;
    }
    
   
    return carsResult.insertId;
}
carsService.update= async(car)=>{
    
        const carToUpdate={

        }
        console.log(carToUpdate)
        // Check if optional data exists
        if (car.licence_plate) {
            // Change user data in 'database'
            carToUpdate.licence_plate = car.licence_plate;
        }
        // Check if optional data exists 
        if (car.make) {
            // Change user data in 'database'
            carToUpdate.make = car.make;
     
        // Check if optional data exists
        if (car.model) {
            // Change user data in 'database'
            carToUpdate.model = car.model;
        }
        if (car.car_type_id) {
            // Change user data in 'database'
            carToUpdate.car_type_id = car.car_type_id;
        }
        if (car.active ===0 || car.active ===1) {
            // Change user data in 'database'
            carToUpdate.active = car.active;
        }
        console.log(car.id)
        carid = parseInt(car.id)
        console.log(carToUpdate)
        const result = await db.query('UPDATE cars SET ? WHERE car_id=?', [carToUpdate, car.id]);
        if (result.affectedRows === 0) return false;
        return true;
}}
carsService.delete = async (carid) => {
    const result = await db.query(`DELETE FROM cars WHERE car_id = ? `, [carid]);
    if (result.affectedRows === 0) return false;
    return true;
  }
module.exports= carsService;
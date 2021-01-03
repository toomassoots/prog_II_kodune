const db = require('../../db.js');


const ordersService={};


ordersService.allOrders =async ()=>{
    const orders = await db.query('select orders.booking_time, wash_types.nameW, users.name, cars.make, cars.model from(((orders inner join wash_types on orders.wash_types_id =wash_types.wash_types_id) inner join users on orders.users_kasutajad_id = users.kasutajad_id)inner JOIN cars on orders.cars_id= cars.car_id) order by orders.booking_time ASC');
    return orders;
}
ordersService.order =async(orderId)=>{
    const orders= await db.query('select orders.booking_time, wash_types.nameW, users.name, cars.make, cars.model from(((orders inner join wash_types on orders.wash_types_id =wash_types.wash_types_id) inner join users on orders.users_kasutajad_id = users.kasutajad_id)inner JOIN cars on orders.cars_id= cars.car_id) where orders.active=1  and  orders_id=? order by orders.booking_time ASC ', [orderId])
    return orders;
}
ordersService.activeOrders =async()=>{
    const orders = await db.query('select orders.booking_time, wash_types.nameW, users.name, cars.make, cars.model from(((orders inner join wash_types on orders.wash_types_id =wash_types.wash_types_id) inner join users on orders.users_kasutajad_id = users.kasutajad_id)inner JOIN cars on orders.cars_id= cars.car_id) where orders.active=1 order by orders.booking_time ASC');
    return orders;
}
ordersService.create=async(order)=>{
    const orderResult= await db.query('INSERT INTO orders SET?',[order])
    
    if(orderResult.affectedRows ===0){
        return false;
    }
    
   
    return orderResult.insertId;
}
ordersService.update= async(order)=>{
    
        const orderToUpdate={

        }
        console.log(orderToUpdate)
        // Check if optional data exists
        if (order.booking_time) {
            // Change user data in 'database'
            orderToUpdate.booking_time = order.booking_time;
        }
        // Check if optional data exists 
        if (order.canceled) {
            // Change user data in 'database'
            orderToUpdate.canceled = order.canceled;
     
        // Check if optional data exists
        if (order.cars_id) {
            // Change user data in 'database'
            orderToUpdate.cars_id = order.cars_id;
        }
        if (order.wash_types_id) {
            // Change user data in 'database'
            orderToUpdate.wash_types_id = order.wash_types_id;
        }
        if (order.active ===0 || order.active ===1) {
            // Change user data in 'database'
            orderToUpdate.active = order.active;
        }
        console.log(order.id)
        orderid = parseInt(order.id)
        console.log(orderToUpdate)
        const result = await db.query('UPDATE orders SET ? WHERE orders_id=?', [orderToUpdate, order.id]);
        if (result.affectedRows === 0) return false;
        return true;
}}
ordersService.delete = async (orderid) => {
    const result = await db.query(`DELETE FROM orders WHERE orders_id = ? `, [orderid]);
    if (result.affectedRows === 0) return false;
    return true;
  }

module.exports= ordersService;
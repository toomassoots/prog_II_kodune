const db = require('../../db.js');


const ordersService={};


ordersService.allOrders =async ()=>{
    const orders = await db.query('SELECT * FROM orders');
    return orders;
}
ordersService.order =async(orderId)=>{
    const orders= await db.query('SELECT * FROM orders WHERE orders_id=?', [orderId])
    return orders;
}
ordersService.activeOrders =async()=>{
    const orders = await db.query('SELECT * FROM orders WHERE active=1');
    return orders;
}
ordersService.create=async(order)=>{
    const orderResult= await db.query('INSERT INTO orders SET?',[order])
    
    if(orderResult.affectedRows ===0){
        return false;
    }
    // Remove password from user data
    //delete userToReturn.password; //console.log(userToReturn)
   
    return orderResult.insertId;
}
ordersService.update= async(order)=>{
    
        const orderToUpdate= await ordersService.order(order.id);
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
        if (order.active) {
            // Change user data in 'database'
            orderToUpdate.active = order.active;
        }
        const result = await db.query(`UPDATE orders SET? WHERE orders_id=?`, [orderToUpdate, order.id]);
        if (result.affectedRows === 0) return false;
        return true;
}}
module.exports= ordersService;
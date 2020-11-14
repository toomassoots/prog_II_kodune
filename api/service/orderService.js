


const orderService={};
const orders = [
    {
        orders_id: 1,
        order_date: "2020-06-17 14:20:11",
       canceled: "",
        canceled_date: "",
        booking_time: '2020-07-06 16:00:00',
        time_edited:null,
        cars_id:1,
        wash_types_id: 1,
        users_kasutajad_id:1,
        active: 1 
    },
    {
        orders_id: 2,
        order_date: "2020-06-17 14:20:11",
       canceled: "",
        canceled_date: "",
        booking_time: '2020-07-06 16:00:00',
        time_edited:null,
        cars_id:2,
        wash_types_id: 2,
        users_kasutajad_id:2,
        active: 2 
    },
];


orderService.read =()=>{
    return orders;
}
orderService.order =(orderId)=>{
    return orders[orderId];
}
orderService.create=(order)=>{
    order.id= orders.length;
    // Add user to 'database'
    orders.push(order);

    // Create new json from newUser for response
    const orderToReturn = { ... order };
    
    
    return orderToReturn

}
usersService.update=(user)=>{
    
        // Check if optional data exists
        if (user.firstName) {
            // Change user data in 'database'
            users[user.id].firstName = user.firstName;
        }
        // Check if optional data exists
        if (user.lastName) {
            // Change user data in 'database'
            users[user.id].lastName = user.lastName;
        }
        // Check if optional data exists
        if (user.email) {
            // Change user data in 'database'
            users[user.id].email = user.email;
        }
        // Check if optional data exists
        if (user.password) {
            // Change user data in 'database'
            users[user.id].password = user.password;
        }
        const updatedOrder={... orders[order.id]}

        return updatedOrder;
}
module.exports= ordersService;
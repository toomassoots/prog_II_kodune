


const washService={};
const washes = [
    {
        wash_types_id: 1,
        name: 'Kiirpesu',
        price: 15.00,
        description: 'Puutevaba kiirpesu. Leotusvaht+survepesu.'
    },
    {
        wash_types_id: 2,
        name: 'Standard pesu',
        price: 22.00,
        description: 'Sisaldab leotusvahtu, survepesu, käsipesu šampooniga, velgede pesu, märgvaha ning kogu auto kuivatust.'
    },
    {
        wash_types_id: 3,
        name: 'Põhipesu',
        price: 26.00,
        description: 'Sisaldab leotusvahtu, kerget pigileotust, käsipesu šampooniga, velgede pesu, märgvaha ning kogu auto kuivatust.'
    },
    {
        wash_types_id: 4,
        name: 'Pigipesu',
        price: 35.00,
        description: 'Põhjalik pigieemaldus autokerelt, käsipesu šampooniga, velgede pesu, märgvaha, kogu auto kuivatus.'
    }
];


washService.read =()=>{
    return washes;
}
washService.wash =(washId)=>{
    return washes[washId];
}
washService.create=(wash)=>{
    wash.wash_types_id= washes.length+1;
    // Add user to 'database'
    washes.push(wash);

    // Create new json from newUser for response
    const washToReturn = { ... wash };
    
    return washToReturn

}
washService.update=(wash)=>{
    
        // Check if optional data exists
        if (wash.name) {
            // Change user data in 'database'
            washes[wash.id].name = wash.name;
        }
        // Check if optional data exists
        if (wash.price) {
            // Change user data in 'database'
            washes[wash.id].price = wash.price;
        }
        // Check if optional data exists
        if (wash.description) {
            // Change user data in 'database'
            washes[wash.id].description = washes.description;
        }
        const updatedWash={... washes[wash.id]}

        return updatedWash;
}
module.exports= washService;
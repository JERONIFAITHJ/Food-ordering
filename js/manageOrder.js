const manageDiffOrder =  async (orderId) => {
    
    const orderReceived = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                document.getElementById(orderId).innerText = 'Chef started preparing'
                resolve();
            }, 2000)
        })
    }
    const sauceAdded = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                document.getElementById(orderId).innerText = 'Sauce added'
                console.log(orderId);
                resolve();
            }, 5000)
        })
    }
    const cheeseAdded = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                document.getElementById(orderId).innerText = 'Cheese added'
                resolve();
            }, 5000)
        })
    }
    const toppingsAdded = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                document.getElementById(orderId).innerText = 'Toppings added'
                resolve();
            }, 5000)
        })
    }
    const secondLayerAdded = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                document.getElementById(orderId).innerText = 'Second layer of cheese added'
                resolve();
            }, 5000)
        })
    }
    const pizzaBaked = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                document.getElementById(orderId).innerText = 'Pizza baked'
                resolve();
            }, 5000)
        });
    }
    const oreganoAdded = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                document.getElementById(orderId).innerText = 'Oregano added and packed'
                resolve();
            }, 5000)
        })
    }
    const packageReceived = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                document.getElementById(orderId).innerText = 'Package received'
                resolve();
            }, 5000)
        })
    }
    const outForDelivery = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                document.getElementById(orderId).innerText = 'Out for delivery'
                resolve();
            }, 3000)
        })
    }

    try{
        orderReceived();
        await sauceAdded();
        await cheeseAdded();
        await toppingsAdded();
        await secondLayerAdded();
        await pizzaBaked();
        await oreganoAdded();
        await packageReceived();
        await outForDelivery();
    }
    catch(err){
        console.log(err);
    }
}
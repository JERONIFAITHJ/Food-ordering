const orderList = [];
let orderPad = 1;
const manageOrder = async  () => {
	const now = new Date();
	console.log(now)
	let orderId = `OTF${now.getFullYear()}${now.getMonth()}${now.getDate()}${now.getHours()}${orderPad++}`
	console.log(orderId);
	let startOrdering = orderList.includes(orderId);
	orderList.push(orderId);
	console.log(startOrdering);
	if(!startOrdering){
		createOrder(orderId);
		manageDiffOrder(orderId);
	}
	else{
		document.querySelector('#existingOrder').classList.remove('d-none');
		setTimeout(() => {
			document.querySelector('#existingOrder').classList.add('d-none');
		}, 5000)
	}
}
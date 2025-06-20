export const orders = [];

function addOrder(order){
  orders.unshift(order);
}

function saveToStorage(){
  localStorage.setItem('orders',js)
}

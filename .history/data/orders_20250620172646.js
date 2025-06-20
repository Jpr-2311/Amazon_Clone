export const orders = JSON.parse(localStorage.getItem('orders')) || [];

expofunction addOrder(order){
  orders.unshift(order);
  saveToStorage();
}

function saveToStorage(){
  localStorage.setItem('orders',JSON.stringify(orders));
}

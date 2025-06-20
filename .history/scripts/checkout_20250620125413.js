import {renderOrderSummary} from './checkout/orderSummary.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js';
import { loadProducts } from '../data/products.js';
//import'../data/cart-class.js';
//import '../data/backend-practise.js';


new Promise((resolve)=>{
  console.log('start promise');
  loadProducts(()=>{
    resolve();
  });
}).then(()=>{
  console.log('next step')
})

loadProducts(()=>{
    renderOrderSummary();
    renderPaymentSummary();
});

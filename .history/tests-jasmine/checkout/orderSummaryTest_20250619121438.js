import { renderOrderSummary } from "../../scripts/checkout/orderSummary.js";
import {loadFromStorage} from'../../data/cart.js';

describe('tests suite renderOrderSummary',()=>{
  it('displays the cart',() =>{
      document.querySelector('.js-test-container').innerHTML=`
      <div class="js-order-summary"></div>
      `;
      spyOn(localStorage,'getItem').and.callFake(()=>{
              return JSON.stringify();
            loadFromStorage();
  });
});
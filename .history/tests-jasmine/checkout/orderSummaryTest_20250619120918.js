import { renderOrderSummary } from "../../scripts/checkout/orderSummary.js";

describe('tests suite renderOrderSummary',()=>{
  it('displays the cart',() =>{
      document.querySelector('.js-test-container').innerHTML=`\<div class="js-order-summary></div>"`;
  });
});
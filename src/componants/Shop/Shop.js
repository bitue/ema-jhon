import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Product from '../Products/Product';
import './shop.css'


const Shop = () => {
    const data=fakeData.slice(0,12)
   
    const [cart , setCart]=useState([])
    let totalPrice=0;
    for (let i = 0; i < cart.length; i++) {
        const element = cart[i];
        totalPrice=totalPrice+element.price
        
    }
    // let shippingCost =0;
    // if(totalPrice<10){
    //     shippingCost=4.99
    // }
    // if(totalPrice<60){
    //     shippingCost=10.99
    // }
    // if(totalPrice>100){
    //     shippingCost=19.99
    // }
    
    
    function addToCart (element){
         const newArr = [...cart,element]
         
         
         setCart(newArr)
    }
    
    
    // console.log(fakeData)
    return (
        <div className="shop-container">
          <div className="product-container">
              {
                  data.map(ele=><Product addToCart={addToCart} product={ele} ></Product>)
              }
                
          </div> 
          <div className="cart">
              <h3>Totals Ordered :{cart.length} </h3>
              
            <p style={{color:"goldenrod"}}>Total Price : {(totalPrice).toFixed(2)}</p>
            {/* <p style={{color:"goldenrod"}}>Shipping Cost : {(shippingCost).toFixed(2)}</p> */}
            <p style={{color:"green"}}>Total Vat : {(totalPrice*.15).toFixed(2)}</p>
            <hr></hr>
            <p style={{color:"goldenrod"}}>Total Price : {(totalPrice*1.15 ).toFixed(2)}</p>
            
            

          </div> 
            
            
        </div>
    );
};

export default Shop;
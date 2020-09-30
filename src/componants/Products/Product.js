import React, { useState } from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
     
    // console.log(props.addToCart)
    // console.log(props.product)
   
    return (
        <div className="product-con">
            <div className="img">
                <img src={props.product.img}></img>
            </div>
            <div className="product-des">
                <h3>{props.product.name}</h3>
                <h5>Powerd By {props.product.seller}</h5>
                <p>Prics:<span style={{color:"Orange"}}>{props.product.wholePrice}.{props.product.priceFraction}</span></p>
                <p>Only {props.product.stock} are available now ...Dont miss this HiFi</p>
                <button onClick={ ()=>{ (props.addToCart(props.product))} } className="btn"><FontAwesomeIcon icon={faShoppingCart} />Add to cart</button>
            </div>
           
            
        </div>
    );
};

export default Product;
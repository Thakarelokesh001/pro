import React from 'react';
import ImageHelper from "./helper/ImageHelper";
import {Redirect} from "react-router-dom"
import { addItemToCart,removeItemFromCart } from './helper/carthelper';


//TODO: Deal with this later
const auth = true;
//isAuthenticated 
const Card = ({
     product,
     addtoCart = true,
     removeFromCart = false,
}) => {

    const cardTitle = product ?product.name : "A photo from pexels"
    const cartDescription = product ?product.description : "Default Description"
    const cartPrice = product ?product.price : "Default"

    const addToCart =()=>{
        if(auth){
          addItemToCart(product,()=>{})
            console.log("Added to Cart");
        }else{
            console.log("Login Please!");
        }
    };

    const getRedirect = redirect =>{
        if(redirect){
            return <Redirect to="cart/"/>;
        }
    };
    
    const showAddToCart = addToCart =>{
        return(
            addToCart &&(
                <button
                onClick={addToCart}
                className="btn btn-block btn-outline-success mt-2 mb-2"
              >
                Add to Cart
              </button>
            )
        )
    }

    const showRemoveFromCart = removeFromCart =>{
        return (
            removeFromCart &&(
                <button
                onClick={() => {
                    //TODO : handle this to
                    removeItemFromCart(product._id)
                    console.log("successfully Removed from cart")
                }}
                className="btn btn-block btn-outline-danger mt-2 mb-2"
              >
                Remove from cart
              </button>
            )
        )
    }
    return (
      <div className="card text-white bg-dark border border-info ">
        <div className="card-header lead">{cardTitle}</div>
        <div className="card-body">
          <ImageHelper product = {product}/>
          <p className="lead bg-success font-weight-normal text-wrap">
            {cartDescription}
          </p>
          <p className="btn btn-success rounded  btn-sm px-4">{cartPrice}</p>
          <div className="row">
            <div className="col-12">
              {showAddToCart(addToCart)}
            </div>
            <div className="col-12">
              {showRemoveFromCart(removeFromCart)}
            </div>
          </div>
        </div>
      </div>
    );
  };
export default Card
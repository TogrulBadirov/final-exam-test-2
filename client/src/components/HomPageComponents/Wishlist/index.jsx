import axios, { all } from "axios";
import React, { useContext, useEffect, useState } from "react";
import "./index.scss";
import Product from "../../Product";
import WishlistProvider, { WishlistContext } from "../../../context/WishlistContext";

const Wishlist = () => {
    const [allProducts, setAllProducts] = useState()

    const {wishlist,setWishlist,addWishlist,removeWishlist} = useContext(WishlistContext)
    
  return (
    <section id="flower-pricing">
      <div className="container">
        <div className="section-heading">
          <h3>Wishlist</h3>
        </div>
        <div className="product-container">
          <div className="row">
            {wishlist.length === 0 && 'Wishlist is Empty!' }
            {wishlist && wishlist.map(product=>(
                <>
                <Product key={product._id} product={product} addWishlist={addWishlist} />
                <button onClick={()=>removeWishlist(product)}>X</button></>
            ))}
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wishlist;

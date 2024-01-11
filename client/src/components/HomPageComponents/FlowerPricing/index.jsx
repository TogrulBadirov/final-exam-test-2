import axios, { all } from "axios";
import React, { useContext, useEffect, useState } from "react";
import "./index.scss";
import Product from "../../Product";
import WishlistProvider, { WishlistContext } from "../../../context/WishlistContext";

const FlowerPricing = () => {
    const [allProducts, setAllProducts] = useState()
    const getAllProducts = async()=>{
        const resp = await axios("http://localhost:3000/product")
        setAllProducts(resp.data)
    }
    useEffect(() => {
      getAllProducts()
    }, [])
    const {wishlist,setWishlist,addWishlist} = useContext(WishlistContext)
    
  return (
    <section id="flower-pricing">
      <div className="container">
        <div className="section-heading">
          <p>Devoted to wonderful beauty</p>
          <h3>Flowers Pricing</h3>
        </div>
        <div className="product-container">
          <div className="row">
            {allProducts && allProducts.map(product=>(
                <Product key={product._id} product={product} addWishlist={addWishlist} />
            ))}
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlowerPricing;

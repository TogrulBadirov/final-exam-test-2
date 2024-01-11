import React from 'react'
import "./index.scss"
import { CiShoppingBasket } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { FiEye } from "react-icons/fi";
import { Link } from 'react-router-dom';
const Product = ({product,addWishlist}) => {
  return (
    <div className="card col-lg-4 col-md-6 col-12">
    <div className="product-image">
    <img
      src={product.image}
      alt=""
    />
    <div className="image-icons">
        <button><CiShoppingBasket /></button>
        <button onClick={()=>addWishlist(product)}><CiHeart /></button>
        <Link to={`/product-detail/${product._id}`}><button><FiEye /></button></Link>
    </div>
    </div>
    <p>
    {product.title}
    </p>
    <span>${product.price}</span>

  </div>
  )
}

export default Product
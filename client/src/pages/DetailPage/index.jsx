import React, { useEffect, useState } from 'react'
import "./index.scss"
import axios from 'axios'
import { useParams } from 'react-router-dom'
const DetailPage = () => {
    const [product, setProduct] = useState()
    const {id} =useParams()
    const getProduct = async ()=>{
        const resp =await axios(`http://localhost:3000/product/${id}`)
        setProduct(resp.data)
    }
    useEffect(() => {
     getProduct()
    }, [])
    
  return (
    <section id="detail-page">
    <div className="container">
      <div className="section-heading">
        <p></p>
        <h3>Product</h3>
      </div>
      <div className="product-container">
        <div className="detail-img">
            <img src={product && product.image} alt="" />
        </div>
        <div className="detail-content">
        <h3>{product && product.title}</h3>
        <p>{product && product.detail}</p>
        <span>${product && product.price}</span>
        </div>
      </div>
    </div>
  </section>
  )
}

export default DetailPage
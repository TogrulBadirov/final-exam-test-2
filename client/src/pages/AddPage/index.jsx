import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async';
import { useFormik } from 'formik';
import "./index.scss"
import axios from 'axios';
const AddPage = () => {
    const [allProducts, setAllProducts] = useState()
    const getAllProducts = async()=>{
        const resp = await axios("http://localhost:3000/product")
        setAllProducts(resp.data)
    }
    useEffect(() => {
      getAllProducts()
    }, [])
    const deleteProduct = async (id)=>{
        await axios.delete(`http://localhost:3000/product/${id}`)
        getAllProducts()
    }
    const formik = useFormik({
        initialValues: {
          title: '',
          image: '',
          price: '',
          detail: '',
        },
        onSubmit: async (values) => {
            await axios.post("http://localhost:3000/product",values)
            getAllProducts()
        },
      });
  return (
    <section id='addPage'>
        <Helmet>
        <title>Add Page</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <form onSubmit={formik.handleSubmit}>
       <label htmlFor="title">Title</label>
       <input
         id="title"
         name="title"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.title}
       />
       
       <label htmlFor="detail">detail</label>
       <input
         id="detail"
         name="detail"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.detail}
       />
 
       <label htmlFor="image">Image</label>
       <input
         id="image"
         name="image"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.image}
       />
 
       <label htmlFor="price">Price</label>
       <input
         id="price"
         name="price"
         type="price"
         onChange={formik.handleChange}
         value={formik.values.price}
       />
 
       <button type="submit">Submit</button>
     </form>
     <table>
        <thead>
            <tr>
                <th>title</th>
                <th>image</th>
                <th>detail</th>
                <th>price</th>
            </tr>
        </thead>
        <tbody>
            {allProducts && allProducts.map(product=>(
                <tr>
                <td>{product.title}</td>
                <td><img src={product.image} alt="" /></td>
                <td>{product.detail}</td>
                <td>{product.price}</td>
                <td><button onClick={()=>deleteProduct(product._id)}>X</button></td>
            </tr>
            ))}
            
        </tbody>
     </table>
    </section>
  )
}

export default AddPage
import React, { createContext, useEffect, useState } from 'react'

export const WishlistContext = createContext()

const WishlistProvider = ({children}) => {
    const [wishlist, setWishlist] = useState(localStorage.getItem("wishlist")?JSON.parse(localStorage.getItem("wishlist")):[])
    useEffect(() => {
      localStorage.setItem('wishlist',JSON.stringify(wishlist))
    }, [wishlist])
    const addWishlist = (product)=>{
        const item = wishlist.findIndex(x=>x._id === product._id)
        if (item !== -1) {
            setWishlist(wishlist.filter(x=> x._id !== product._id))
        }
        else{
            setWishlist([...wishlist,product])
        }
        
    }
    const removeWishlist = (product)=>{
        const item = wishlist.findIndex(x=>x._id === product._id)
        if (item !== -1) {
            setWishlist(wishlist.filter(x=> x._id !== product._id))
        }
        
    }
    const data = {
        wishlist,
        setWishlist,
        addWishlist,
        removeWishlist
    }
  return (
    <WishlistContext.Provider value={data}>
        {children}
    </WishlistContext.Provider>
  )
}

export default WishlistProvider
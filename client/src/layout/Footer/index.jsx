import React from 'react'
import "./index.scss"
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    
<footer>
    <div className="container">
        <div className="input">
            <input type="email" placeholder='Your Email' />
            <button>Send</button>
        </div>
        <div className="about">
            <h3>About</h3>
            <ul>
                <li><Link>About Us</Link></li>
                <li><Link>Our Partners</Link></li>
                <li><Link>Our Services</Link></li>
            </ul>
        </div>
        <div className="contact">
            <h3>Contact</h3>
            <ul>
                <li><Link>Contact Us</Link></li>
                <li><Link>FAQ Page</Link></li>
                <li><Link>About Me</Link></li>
            </ul>
        </div>
        <div className="follow">
            <h3>Follow Us</h3>
          
        </div>
    </div>
</footer>
  )
}

export default Footer
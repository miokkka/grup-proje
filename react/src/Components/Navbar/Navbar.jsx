import React, { useState } from 'react';
import "./Navbar.scss";

function Navbar() {
     const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
  return (
    <div className='navbar'>
      <div className="navbar__header">
        <h2><strong>My Account</strong></h2>
        <p><strong><i class="ri-ticket-2-line"> Tickets</i></strong></p>
      </div>
        <div className="navbar__container">
                <div className={`navbar__hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
                <ul className={`navbar__menu ${isOpen ? 'active' : ''}`}>
                    <li className="navbar__item">
                        <a href="#dashboard" className="navbar__link"><i class="ri-dashboard-2-fill">Dashboard</i></a>
                    </li>
                    <li className="navbar__item">
                        <a href="#orders" className="navbar__link"><i class="ri-box-3-line">Orders</i></a>
                    </li>
                    <li className="navbar__item">
                        <a href="#adresses" className="navbar__link"><i class="ri-map-pin-line">Adresses</i></a>
                    </li>
                     <li className="navbar__item">
                        <a href="#wishlist" className="navbar__link"><i class="ri-poker-hearts-line">Wishlist</i></a>
                    </li>
                    <li className="navbar__item">
                        <a href="#tickets" className="navbar__link"><i class="ri-ticket-2-line">Tickets</i></a>
                    </li>
                    <li className="navbar__item">
                        <a href="#editProfile" className="navbar__link"><i class="ri-id-card-line">Edit Profile</i></a>
                    </li>
                </ul>
            </div>
      
    </div>
  )
}

export default Navbar

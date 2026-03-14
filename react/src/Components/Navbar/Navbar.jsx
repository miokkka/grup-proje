import React from 'react'
import "./Navbar.scss";

function Navbar() {
     const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
  return (
    <div className='navbar'>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/remixicon@4.9.0/fonts/remixicon.css" />
      <div className="header">
        <h2><strong>My Account</strong></h2>
        <p>Tickets</p>
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
                        <a href="#orders" className="navbar__link">Orders</a>
                    </li>
                    <li className="navbar__item">
                        <a href="#adresses" className="navbar__link">Adresses</a>
                    </li>
                     <li className="navbar__item">
                        <a href="#wishlist" className="navbar__link">Wishlist</a>
                    </li>
                    <li className="navbar__item">
                        <a href="#tickets" className="navbar__link">Tickets</a>
                    </li>
                    <li className="navbar__item">
                        <a href="#editProfile" className="navbar__link">Edit Profile</a>
                    </li>
                </ul>
            </div>
      </div>
    </div>
  )
}

export default Navbar

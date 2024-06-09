import React from 'react';
import './Navbar.css';


function Navbar() {
  return (
    <div className='navbar'>
      
      <img
        className="nav_logo"
        src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
        alt="Netflix Logo"
      />
      <img
        className="avater"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="user"
      />
    </div>
  )
}

export default Navbar

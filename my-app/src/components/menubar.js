import React from 'react'

import './menubar.css'

const MenuBar = () => {
    function handleLoadScript() {
        import('./gettronwallet.js')
          .then(({ functionFromModule }) => {
            // Use functionFromModule 
          })
          .catch(err => {
            // Handle failure
          });
      };
    return (
        <nav className="header">
            <div className="nav-wrapper">
                <a className="logo" href='/'>Your Logo</a>
                <input className="menu-btn" type="checkbox" id="menu-btn"/>
                <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>

                <ul className="menu">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>                
                </ul>
               <button onClick={handleLoadScript}>Load</button>
                
            </div>
        </nav>
    )
}

export default MenuBar;
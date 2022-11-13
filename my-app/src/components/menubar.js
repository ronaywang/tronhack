import React from 'react'

import './menubar.css'

const MenuBar = () => {
    // function handleLoadScript() {
    //     import('./gettronwallet.js')
    //       .then(({ functionFromModule }) => {
    //         // Use functionFromModule 
    //       })
    //       .catch(err => {
    //         // Handle failure
    //       });
    //   };
    return (
        <nav className="header">
            <div className="nav-wrapper">
                <a className="logo" href='/'>Bountiful</a>

            <div className='submit' float='right'>
                <a className="Submissions" href=' https://airtable.com/shr86g6yJ6qQsOEoI'>Submit a Bounty</a>
            </div>
                
            </div>
        </nav>
    )
}

export default MenuBar;
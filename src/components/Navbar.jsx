import React from 'react'

function Navbar() {
    return (
        <div style="padding-top: 2rem;" className='px-0 container-fluid'>
            <nav style={{ background: 'linear-gradient(rgb(0, 0, 0), rgb(26, 26, 26))', transform: 'translateY(0px)' }} className='nav navbar-expand-lg py-2 fixed-top' id='mainNav'>
                <div className="container px-4">
                    <a href="/" className="navbar-brand fw-bold">
                    <img src="/kishthedj/src/img/GT7EXM01.svg" alt="" style={{ height: '40px', filter: 'contrast(0) brightness(3)' }} className='image-fluid' />
                    </a>
                </div>
            </nav>
        
    </div>
    )
}

export default Navbar

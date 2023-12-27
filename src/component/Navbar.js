import React from 'react'

const Navbar = () => {
    return (
        <div id='navbar'>

            <div className="container">
                <div className="row ">

                    <nav className="navbar navbar-expand-lg " style={{ zIndex: '10000' }}>

                        <div className="container-fluid">

                            <h3 className='logo mb-0'>
                                <span>M</span>uhammad <span>A</span>bbas
                            </h3>

                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse
                             navbar-collapse
                             justify-content-end
                             pe-md-5"
                                id="navbarNav">

                                <ul className="navbar-nav text-end">

                                    <li className="nav-item">
                                        <a className="nav-link " aria-current="page" href="#home">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#about">About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#template">Templates</a>
                                    </li>

                                    <li className='nav-item'>
                                        <a href="#contact" className="nav-link">Contact</a>
                                    </li>

                                    <li className="nav-item">

                                        <a href="M.Abbas.pdf" download className='nav-link nav-cv-btn'>
                                            <button className="btn btn-sm btn-light" style={{color:'var(--text-color)'}}>CV
                                            <span><i className="fa-solid fa-file-arrow-down ps-2 fs-5"></i></span>
                                            </button>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
import React from 'react'
import './index.css'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Templates from './Templates'
import Contact from './Contect'
import Footer from './Footer'

import {
    BrowserRouter as Router,
    Routes
} from 'react-router-dom'
const App = () => {
    return (
        <div>
            <Router>
                {/* <Routes> */}

                    <Navbar />
                    <Home />
                    <About />
                    <Templates />
                    <Contact />
                    <Footer />

                {/* </Routes> */}
            </Router>
        </div>
    )
}

export default App;
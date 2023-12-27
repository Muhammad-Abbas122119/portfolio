import React from 'react'
import cover from '../img/cover.png'

const Home = () => {
    return (
        <div id='home'>
            <div className='info
             text-light
             d-flex
             justify-content-center
             align-items-center
             flex-column'
            >
                <h5 className='text-capitalize'>
                    ReactJS developer
                </h5>

                <h3>Hi! I'm <span className='h1'>Muhammad Abbas</span></h3>
                <h2>From Pakistan</h2>
                
            </div>

            <div className='cover-img'>
                <img src={cover} alt="" />
            </div>
        </div>
    )
}

export default Home 
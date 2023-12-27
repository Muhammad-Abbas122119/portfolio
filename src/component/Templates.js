import React, { useState } from 'react'
import Cards from './ExternalSource'
import { Link } from 'react-router-dom';

import { ScrollMenu } from "react-horizontal-scrolling-menu";
import 'react-horizontal-scrolling-menu/dist/styles.css';

import {LeftArrow , RightArrow} from './ExternalSource';

const Templates = () => {

    const [cards, SetCards] = useState(Cards);
    // console.log(cards[0].img);
    return (
        <div id='template'>
            <div className="container pt-4">
                <h2><span style={{ color: 'blueviolet', fontWeight: "800", }}>T</span>emplates</h2>
                <div className="row">

                    <ScrollMenu LeftArrow ={LeftArrow} RightArrow={RightArrow}>
                    {
                        cards.map((card) => {
                            return (
                                    <div className="col mx-2 mx-md-5" key={card.name}>
                                        <div className='card'>
                                            <img src={card.img} alt="" />

                                            <div className='card-details'>

                                                <div className="h5 
                                                    text-uppercase
                                                    w-100 fw-bold"
                                                    style={{ color: "var(--text-color)" }}>{card.name}</div>

                                                <div className="px-1">{card.desc}</div>
                                            </div>

                                            <div className="shutter">

                                                <Link to={card.cdnPath} target='_blank'>
                                                <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                                </Link>
                                                
                                            </div>
                                        </div>

                                    </div>
                            )
                        })
                    }
                    </ScrollMenu>
                </div>
            </div>
        </div>
    )
}

export default Templates;
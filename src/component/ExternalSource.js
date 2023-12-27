import React, { useContext } from 'react';
import { VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
 

// THESE ARE THE IMAGES FOR CARD COMPONENT
import cafeteria from '../img/cafeteria.png'
import attire from '../img/attire.JPG'
import gymWorkOut from '../img/gymWorkOut.jpg'
import petShopeAndCareCenter from '../img/petShopeAndCareCenter.jpg'
import onlineWebDesigning from '../img/onlineWebDesigning.jpg'

const Cards = [
    {
        img:cafeteria,
        name:'Cafeteria',

        desc:'This Website Template is used for helping customers to select thier food and....',

        cdnPath:'https://muhammad-abbas122119.github.io/cafeteria/'
    },
    {
        img:petShopeAndCareCenter,
        name:'pet Shope And Care Center',

        desc:'This Website Template is used to provide help to the customers to select a doctore and foods for their pets....',

        cdnPath:'https://muhammad-abbas122119.github.io/pssc/'
    },
    
    {
        img:onlineWebDesigning,
        name:'online web designing',

        desc:'This Website Template is used for helping people to contact with our software house and ordered to get a software...',

        cdnPath:'https://muhammad-abbas122119.github.io/design-task/'
    }, 
    {
        img:gymWorkOut,
        name:'gym workout using api',

        desc:'This Website is using APIs to provide facilities to exercising at home....',

        cdnPath:'https://muhammad-abbas122119.github.io/gymWorkout/'
    },
   {
        img:attire,
        name:'attire shopping template',

        desc:'This Website Template is used for helping customers to shope their favorit Attires and so on',

        cdnPath:'https://muhammad-abbas122119.github.io/design-task1/'
    },
]

export default Cards; 


// FUNCTIOINS FOR SCROLLING MENU

function LeftArrow() {
    const { isFirstItemVisible, scrollPrev } =
      React.useContext(VisibilityContext);
  
    return (
        <button className='scroll-left' onClick={()=>{scrollPrev()}}><span><i className="fa-solid fa-arrow-left pe-3"></i></span></button>
    );
  }
  
  function RightArrow() {
    const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);
  
    return (
        <button className='scroll-right' onClick={()=>scrollNext()}><span><i className="fa-solid fa-arrow-right ps-3"></i></span></button>
    );
  }
export {LeftArrow , RightArrow};  
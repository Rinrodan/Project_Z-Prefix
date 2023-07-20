import React, { useState, useEffect, useContext } from 'react';
import styles from './App.css'
import LogIn from './Components/LogIn';
import { ParentContext } from './App.js'
import { Link } from 'react-router-dom';
import Banner from './Components/Banner';



const Landing = () => {

// const { itemslist } = useContext(ParentContext)

// const [isShown, setIsShown] = useState(false);
function changeBackground(e) {
    e.target.style.background = 'red';
    e.target.style.color = 'white';
    e.target.style.scale = '2';
    }
function changeBackgroundBack(e) {
    e.target.style.background = 'white';
    e.target.style.color = 'black';
    e.target.style.scale = '1';

    }

    return (
        <div className='landing'>
            <header className='header shadowLG'>
                <Banner />
                <LogIn />
            </header>
            <main>
                <div className='welcomeContainer'>
                <Link to={`/home/`}>
                        <div 
                            className='button landingWelcome' onMouseOver={changeBackground} onMouseLeave={changeBackgroundBack}>
                            ENTER
                        </div>
                    </Link>
               
                
                </div>
            </main>
            <footer></footer>
        </div>//home
    );
}
export default Landing;

// <div>
// {itemslist.map((item) => {
//     return (
//             <div className="itemTileVisitor" key={`${item.id}`}> 
//             {/* I want this tile to be long and skinny, an image(stretch goal) item name, description, and quantity */}
//             {/* <div className="itemImageContainer">
//                 <img className="itemImage" id={`${item.name}`} src={item.image} alt={`${item.name}`} />
//             </div> */}
//             <div className="itemName">{`${item.item_name}`}</div>
//             <div className="itemDescription">{`${item.description}`}</div>
//             <div className="itemQuantity">{`${item.quantity}`}</div>
//             </div>//itemTileVisitor
//         )
// })
// }            
// </div>

{/* <button
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}>
        
        <Link to={`/home/`}>
                        <div 
                            className='button landingWelcome'
                            onMouseEnter={() => setIsShown(true)}
                            onMouseLeave={() => setIsShown(false)}>

                            ENTER
                        </div>
                    </Link>
      </button>
      {isShown && (
        <div>
          I'll appear when you hover over the button.
        </div>
      )} */}
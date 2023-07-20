import React, { useState, useEffect, useContext } from 'react';
import styles from './App.css'
import { ParentContext } from './App.js'



const Home = () => {

const { itemslist } = useContext(ParentContext)


    return (
        <div className='home'>
            <header>
                <div>
                <h1>HEADER</h1>
                <h1>home page</h1>
                </div>
            </header>
            <main>
                <h1>MAIN</h1>
                <div className='itemListContainer'>
                    <div className='itemList'>
                     <h1>Item Inventory</h1>   
                        <ul>
                            <li className='itemTileVisitor'>
                                <div className='itemName'>Lorem ipsum</div>
                                <div className='itemDescription'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A diam sollicitudin tempor id eu nisl nunc mi. Phasellus egestas tellus rutrum tellus pellentesque. Pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Ultrices vitae auctor eu augue ut. Tempor nec feugiat nisl pretium fusce id velit ut tortor. Eget nunc lobortis mattis aliquam faucibus purus in massa tempor. Duis ultricies lacus sed turpis. Commodo elit at imperdiet dui accumsan. Rutrum quisque non tellus orci ac auctor augue mauris.</div>
                                <div className='itemQuantity'>On Hand: 42</div>
                                </li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                 </div>
                </div>
            </main>
            <footer>footer</footer>
        </div>//home
    );
}
export default Home;

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
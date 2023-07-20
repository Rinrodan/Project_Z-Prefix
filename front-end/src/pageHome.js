import React, { useState, useEffect, useContext } from 'react';
import styles from './App.css'
import { ParentContext } from './App.js'



const Home = () => {

const { itemslist } = useContext(ParentContext)


    return (
        <div className='home'>
            <head></head>
            <header>
                <div>
                <h1>HEADER</h1>
                </div>
            </header>
            <main>
                <h1>MAIN</h1>
                <div>
                {itemslist.map((item) => {
                    return (
                            <div className="itemTileVisitor" key={`${item.id}`}> 
                            {/* I want this tile to be long and skinny, an image(stretch goal) item name, description, and quantity */}
                            {/* <div className="itemImageContainer">
                                <img className="itemImage" id={`${item.name}`} src={item.image} alt={`${item.name}`} />
                            </div> */}
                            <div className="itemName">{`${item.item_name}`}</div>
                            <div className="itemDescription">{`${item.description}`}</div>
                            <div className="itemQuantity">{`${item.quantity}`}</div>
                            </div>//itemTileVisitor
                        )
            })
        }            
                </div>
            </main>
            <footer><h1>MAIN</h1></footer>
        </div>//home
    );
}
export default Home;
import React, { useState, useEffect, useContext} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LogIn from './Components/LogIn';
import { ParentContext, GetThatIdToTheParent } from './App.js'
import Banner from './Components/Banner';


const Home = ({sendThatId}) => {

const { itemsList, itemId } = useContext(ParentContext);
console.log(itemsList);
const [itemIdToSend, setItemIdToSend] = useState('')

return (
    <>
    <div className='home'>
        <header className='header'>
            <Banner />
            <LogIn />
        </header>
        <main>
            <div className='itemListContainer'>
            
            <div className='itemList'> {/* a ternary maybe */}
                <div className="itemListTitle">Inventory</div>
                {itemsList && itemsList.length > 0 ? (
                itemsList.map((item) => {
                    return (
                    <div className="itemTileVisitor shadowSmall" key={`${item.id}`}>
                        <h1 className="itemName">{`${item.item_name}`}</h1>
                        <div className='itemCardImageContainer'>
                        {/* <img className="itemCardImage" id={`${item.name}`} src={item.img} alt={`${item.name}`} /> */}
                        </div>
                        <div className='itemDescription'>{`${item.description}`}</div>
                        <div className='itemQuantity'>{`${item.quantity}`}</div>
                        <Link to={`/ItemDetailsPage/${item.id}`}>
                            <button 
                                onClick={e => setItemIdToSend(e.target.value)} className='itemDetailButton' 
                                value={`${item.id}`}>Details
                            </button>
                        </Link>
                    </div>
                    );
                })
                ) : (
                <div className='itemDetailsButtonErrorMessage'>No items available</div>
                )}
            </div>{/* itemslist */}
            </div>{/* itemListContainer */}
        </main>
        <footer>footer</footer>
        </div> {/* home */}
        </>
    );
}
export default Home;


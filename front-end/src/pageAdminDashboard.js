
import React, { useContext, useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ParentContext } from './App.js';
import Banner from './Components/Banner.js';
import LogIn from './Components/LogIn.js';
import './authorized.css';

import ItemDetailsPageEDIT from './ItemDetailsPageEDIT'
import ItemDetailsPage from './pageItemDetails.js';





const Dashboard = () => {
//   const Home = ({sendThatId}) => {

    const { itemsList, itemId } = useContext(ParentContext);
    console.log(itemsList);
    const [itemIdToSend, setItemIdToSend] = useState('')
    
    return (
    
        <div className='home'>
            <header className='header'>
                <Banner />
                <LogIn />
            </header>
            <div className='itemListContainerAuth'>
            
            <div className='itemList'> {/* a ternary maybe */}
                <div className="AuthitemListTileAuth auth">Inventory</div>
                {itemsList && itemsList.length > 0 ? (
                itemsList.map((item) => {
                    return (
                    <div className="itemTileAuth shadowSmall auth" key={`${item.id}`}>
                        <h1 className="itemNameAuth">{`${item.item_name}`}</h1>
                        <div className='itemCardImageContainerAuth auth'>
                        {/* <img className="itemCardImage" id={`${item.name}`} src={item.img} alt={`${item.name}`} /> */}
                        </div>
                        <div className='itemDescriptionAuth'>{`${item.description}`}</div>
                        <div className='itemQuantityAuth '>{`${item.quantity}`}</div>
                        <div className='itemUserIdAuth'>User_ID:  {`${item.user_id}`}</div>
                        <Link to={`/ItemDetailsPage/${item.id}`}>
                            <button 
                                onClick={e => setItemIdToSend(e.target.value)} className='itemDetailButtonAuth shadowSmall' 
                                value={`${item.id}`}>Details
                            </button>
                            <Link to={`/ItemDetailsPageEDIT/${item.id}`}>
                            <button 
                                onClick={e => setItemIdToSend(e.target.value)} className='itemDetailButtonAuth shadowSmall' 
                                value={`${item.id}`}>EDIT
                            </button>
                        </Link>
                        </Link>
                    </div>
                    );
                })
                ) : (
                <div className='itemDetailsButtonErrorMessage'>No items available</div>
                )}
            </div>{/* itemslist */}
            </div>{/* itemListContainer */}
        </div>
        );
    }
export default Dashboard;
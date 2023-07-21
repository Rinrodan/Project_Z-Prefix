
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React, { useContext, useState, useEffect} from 'react';
import { ParentContext } from './App.js';






const ItemDetailsPage = () => {
  const { itemsId, itemsList } = useContext(ParentContext);
  // const [itemsList, setItemsList] = useState([]);
  
  // useEffect(() => {
  //   fetch('http://localhost:8080/items')
  //     .then(response => response.json())
  //     .then(data => setItemsList(data))
  //     .catch(error => console.error('Error fetching items:', error));
  // }, []);

    let link = window.location.href;
    let linkArr = link.split('/');
    let linkID = linkArr.pop() || linkArr.pop();
    let item = itemsList.find((e) => e.id == linkID);
    console.log(item);

    return (
      <>
      <div className="itemDetailsPageContainer">

        <section className='itemCardContainer'>
          <div className="itemCard" key={`${item.id}`}>
              <h1 className="itemCardTitle">{`${item.item_name}`}</h1>
              <div className='itemCardImageContainer'>
                  {/* <img className="itemCardImage" id={`${item.name}`} src={item.img} alt={`${item.name}`} /> */}
              </div>
              <div className='itemCardDescription'>{`${item.description}`}</div>
              <div className='itemCardQuantity'>{`${item.quantity}`}</div>
              <Link to={`/Home/`}>
                            <button 
                                className='backButton' 
                                >Home
                            </button>
                        </Link>
                        
        
          </div>            
        </section>
      </div>
      </>
    );
    }

export default ItemDetailsPage;
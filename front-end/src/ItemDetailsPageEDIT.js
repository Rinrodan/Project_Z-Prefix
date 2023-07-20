
import React, { useContext, useState, useEffect} from 'react';
import { ParentContext } from './App';



const ItemDetailsPageEDIT = () => {
  const { itemsList } = useContext(ParentContext);
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
        <div class="itemDetailsPageContainer">

        <section className='itemCardContainer'>
            <form>
            <div className="itemCard" key={`${item.id}`}>
                <h1 className="itemCardTitle">{`${item.item_name}`}</h1>
                <div className='itemCardImageContainer'>
                    {/* <img className="itemCardImage" id={`${item.name}`} src={item.img} alt={`${item.name}`} /> */}
                </div>
                <div className='itemCardDescription'>{`${item.description}`}</div>
                <div className='itemCardQuantity'>{`${item.quantity}`}</div>
                <div  className='Edit'></div>
            </div>
            </form>            
        </section>
        </div>
        </>
    );
}

export default ItemDetailsPageEDIT;
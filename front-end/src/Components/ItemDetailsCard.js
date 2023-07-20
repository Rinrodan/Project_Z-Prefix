import '../App.css'
import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ParentContext } from '../App'

const ItemDetailsCard = () => {
    const { itemsList } = useContext(ParentContext);
//   const { itemData } = useContext(ParentContext)
let link = window.location.href;
    let linkArr = link.split('/');
    let linkID = linkArr.pop() || linkArr.pop();
    let item = item.find((e) => e.id == linkID);
    console.log(item);


    return ("asdf")
    //     <section className='ItemCardContainer'>
    //         {itemslist.map((item) => {
    //             return (
    //                 <div className="itemCard" key={`${item.id}`}>
    //                     <h1 className="itemcardTitle">{`${item.name}`}</h1>
    //                     <div className='itemCardImageContainer'>
    //                         {/* <img className="itemCardImage" id={`${item.name}`} src={item.img} alt={`${item.name}`} /> */}
    //                     </div>
    //                     <div className='itemCardDescription'>{`${item.description}`}</div>
    //                     <div className='itemCardQuantity'>{`${item.quantity}`}</div>
    //                 </div>
    //             )
    //         })}
    //     </section>
    // );
}

export default ItemDetailsCard;
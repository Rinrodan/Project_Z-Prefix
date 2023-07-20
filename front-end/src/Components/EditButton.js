import styles from '../App.css'
import React, { useState, useEffect, useContext, createContext} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ParentContext } from '../App.js';

const EditButton = () => {
    const { itemId } = useContext(ParentContext);
    return (
        
        <Link to={`/ItemDetailsPageEDIT/${itemId}`} id="editButtonLink" >
            <button className='editButton' id={`${itemId}`}>EDIT</button>
        </Link>

    )
}
export default EditButton;
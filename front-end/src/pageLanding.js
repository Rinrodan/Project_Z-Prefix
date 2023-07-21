import React, { useState, useEffect, useContext, link } from 'react';
import styles from './App.css'
import LogIn from './Components/LogIn';
import { ParentContext } from './App.js'
import { Link } from 'react-router-dom';
import Banner from './Components/Banner';

const Landing = () => {

    function changeBackground(e) {e.target.style.background = 'red'; e.target.style.color = 'white'; e.target.style.scale = '2';}
    function changeBackgroundBack(e) {e.target.style.background = 'white'; e.target.style.color = 'black'; e.target.style.scale = '1';}

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
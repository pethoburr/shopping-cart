import React, { useEffect, useState } from 'react';
import bikeVid from '../assets/motobike.mov';
import { Link } from 'react-router-dom';
import '../stylesheets/home.css';

const Home = () => {
    const [showDiv, setShowDiv] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowDiv(true);
        }, 3000);
        return () => clearTimeout(timeout);
    }, []);
    return(
        <div className='main'>
            <nav className='content'>
            <Link to='/' style={{textDecoration: 'none'}}>
            <h3><i class="fa-solid fa-motorcycle fa-spin"></i>&nbsp;Bike Life</h3>
            </Link>
            <ul>
                <Link to='/about' style={{textDecoration: 'none'}}>
                    <li className='links'>About</li>
                </Link>
                <Link to='/shop' style={{textDecoration: 'none'}}>
                    <li className='links'>Shop</li>
                </Link>
                </ul>
            </nav> 
            <div className={`shopNowContainer ${showDiv ? 'show' : ''}`}>
                <Link to='/shop'className='shopBtn'>
                    <div className='shopTxt'>SHOP NOW!</div>&nbsp;<i class="fa-solid fa-truck-fast"></i>
                </Link>
            </div>
            
            <video src={bikeVid} autoPlay loop muted/>
        </div>
    )
}

export default Home;
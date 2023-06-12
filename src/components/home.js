import React, { useEffect, useState } from 'react';
import bikeVid from '../assets/motobike.mov';
import { Link } from 'react-router-dom';
import '../stylesheets/home.css';

const Home = () => {
    const [showDiv, setShowDiv] = useState(false);
    const [showOrNa, setShowOrNa] = useState(false);
    const brgrIcon = <i class="fa-solid fa-bars"></i>;
    const x = <div className='x'>X</div>;
    const brgrMenu = <div className='hamburger'>
    <Link to='/' style={{textDecoration: 'none'}}>
      <p className='linksys'>Home</p>
    </Link>
    <Link to='/about' style={{textDecoration: 'none'}}>
          <p className='linksys'>About</p>
      </Link>
      <Link to='/shop' style={{textDecoration: 'none'}}>
          <p className='linksys'>Shop</p>
      </Link>
      </div>;
    const showMenu = () => {
      if (showOrNa) {
        setShowOrNa(false);
      } else {
        setShowOrNa(true);
      }
    }
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
            <div className='burgerIcon' onClick={showMenu}>
              {showOrNa && x} {!showOrNa && brgrIcon}
            </div>
            {showOrNa && brgrMenu}
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
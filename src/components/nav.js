import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";
  
import '../stylesheets/nav.css';

const Nav = (props) => {
    const { count } = props;
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
    return(
        <nav>
            <Link to='/' style={{textDecoration: 'none'}}>
            <h3><i class="fa-solid fa-motorcycle fa-spin"></i>&nbsp;Bike Life</h3>
            </Link>
            <div className='burgerIcon' onClick={showMenu}>
              {showOrNa && x} {!showOrNa && brgrIcon}
            </div>
            {showOrNa && brgrMenu}
                <Link to='/contact' style={{textDecoration: 'none'}}>
                  <p className='mobileCart'>
                  <div className='cartEl'>
                  <Badge color="secondary" badgeContent={count}>
                    <ShoppingCartIcon />{" "}
                  </Badge>
                  </div>
                  </p>
                </Link>
            <ul className='menuList'>
              <Link to='/' style={{textDecoration: 'none'}}>
                <li className='links'>Home</li>
              </Link>
                <Link to='/about' style={{textDecoration: 'none'}}>
                    <li className='links'>About</li>
                </Link>
                <Link to='/shop' style={{textDecoration: 'none'}}>
                    <li className='links'>Shop</li>
                </Link>
                <Link to='/contact' style={{textDecoration: 'none'}}>
                  <li>
                  <div className='cartEl'>
                  <Badge color="secondary" badgeContent={count}>
                    <ShoppingCartIcon />{" "}
                  </Badge>
                  </div>
                  </li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav;
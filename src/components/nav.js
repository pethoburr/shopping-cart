import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";
  
import '../stylesheets/nav.css';

const Nav = (props) => {
    const { count } = props;
    const [itemCount, setItemCount] = React.useState(1);
    return(
        <nav>
            <Link to='/' style={{textDecoration: 'none'}}>
            <h3><i class="fa-solid fa-motorcycle fa-spin"></i>&nbsp;Bike Life</h3>
            </Link>
            <ul>
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
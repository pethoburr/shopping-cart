import React from 'react';
import Nav from './nav.js';
import '../stylesheets/contact.css';
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import Badge from "@material-ui/core/Badge";

const Contact = (props) => {
    const { bag, plus, minus, update, cut, counter } = props;
    let total = 0;
    console.log(bag);
    return(
        <div>
            <Nav count={counter}/>
            <div className='contentContainer'>
                <h5>SHOPPING CART</h5>
                <div className='cartItems'>
                {bag.map((item) => {
                total += (item.price * item.quantity);
                return(
                    <div className='checkoutContainer'>
                        <p className='name'>{item.name}</p>
                        <p className='price'>${item.price.toLocaleString()}</p>
                        <ButtonGroup>
                        <p className='quantity'>{item.quantity}</p>
          <Button
            onClick={() => {
                const price = item.price;
                minus(price);
                cut(price);
            }}
          >
            {" "}
            <RemoveIcon fontSize="small" />
          </Button>
          <Button
            onClick={() => {
              const name = item.name;
              const price = item.price;
              plus();
              update(name, price);
            }}
          >
            {" "}
            <AddIcon fontSize="small" />
          </Button>
        </ButtonGroup>
                    </div>
                )
            })}
                </div>
                <div className='totalEl'><p className='totalP'>TOTAL ${total.toLocaleString()}</p><div className='checkoutEl'>checkout</div></div>
            </div>
            
        </div>
    )
}

export default Contact;
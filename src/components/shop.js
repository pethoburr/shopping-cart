import React, { useState } from 'react';
import Nav from './nav.js';
import Contact from './contact.js';
import v4 from '../assets/v4.jpg';
import h2r from '../assets/h2r.jpg';
import zx10r from '../assets/zx10r.jpg';
import zx6r from '../assets/zx6r.jpg';
import gsxr1000 from '../assets/gsxr1000.jpeg';
import gsxr750 from '../assets/gsxr750.jpeg';
import gsxr600 from '../assets/gsxr600.jpg';
import cbr1000 from '../assets/cbr1000rr.webp';
import cbr600 from '../assets/cbr600rr.jpeg';
import r1 from '../assets/r1.jpeg';
import r6 from '../assets/r6.jpg';
import bmw from '../assets/bmw.jpeg';
import aprilla from '../assets/aprilla.avif';
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import '../stylesheets/shop.css';

const Shop = (props) => {
    const { counter, bag, plus, minus, update, cut } = props;
    console.log(bag);
    return(
        <div>
            <Nav count={counter}/>
            <div className='shopContainer'>
                <h4>SHOP</h4>
                <div className='allPics'>
                    <div className='picContainer' id='ducati'>
                        <img src={v4} className='ducatiImg' alt='2023 ducati V4 R' />
                        <p>2023 Ducati Panigale V4 R</p>
                        <p><i>MSRP * $52,995</i></p>
                        <ButtonGroup>
          <Button
            onClick={() => {
              const price = 52995;
              minus(price);
              cut(price);
            }}
          >
            {" "}
            <RemoveIcon fontSize="small" />
          </Button>
          <Button
            onClick={() => {
              const name = '2023 Ducati Panigale V4 R';
              const price = 52995;
              plus();
              update(name, price);
            }}
          >
            {" "}
            <AddIcon fontSize="small" />
          </Button>
        </ButtonGroup>
                    </div>
                    <div className='picContainer'>
                        <img src={h2r} alt='2023 Kawasaki H2R' />
                        <p>2023 Kawasaki H2R</p>
                        <p><i>MSRP * $66,900</i></p>
                        <ButtonGroup>
          <Button
            onClick={() => {
              const price = 66900;
              minus(price);
              cut(price);
            }}
          >
            {" "}
            <RemoveIcon fontSize="small" />
          </Button>
          <Button
            onClick={() => {
              const name = '2023 Kawasaki H2R';
              const price = 66900;
              plus();
              update(name, price);
            }}
          >
            {" "}
            <AddIcon fontSize="small" />
          </Button>
        </ButtonGroup>
                    </div>
                    <div className='picContainer'>
                        <img src={zx10r} alt='2023 Kawasaki ZX10R' />
                        <p>2023 Kawasaki ZX10R</p>
                        <p><i>MSRP * $21,299</i></p>
                        <ButtonGroup>
          <Button
            onClick={() => {
              const price = 21299;
              minus(price);
              cut(price);
            }}
          >
            {" "}
            <RemoveIcon data-test-id='remove' fontSize="small" />
          </Button>
          <Button
            onClick={() => {
              const name = '2023 Kawasaki ZX10R';
              const price = 21299;
              plus();
              update(name, price);
            }}
          >
            {" "}
            <AddIcon data-test-id='add' fontSize="small" />
          </Button>
        </ButtonGroup>
                    </div>
                    <div className='picContainer'>
                        <img src={zx6r} alt='2023 Kawasaki ZX6R' />
                        <p>2023 Kawasaki ZX6R</p>
                        <p><i>MSRP * $13,999</i></p>
                        <ButtonGroup>
          <Button
            onClick={() => {
              const price = 13999;
              minus(price);
              cut(price);
            }}
          >
            {" "}
            <RemoveIcon fontSize="small" />
          </Button>
          <Button
            onClick={() => {
              const name = '2023 Kawasaki ZX6R';
              const price = 13999;
              plus();
              update(name, price);
            }}
          >
            {" "}
            <AddIcon fontSize="small" />
          </Button>
        </ButtonGroup>
                    </div>
                    <div className='picContainer'>
                        <img src={gsxr1000} alt='2023 Suzuki GSXR1000RR' />
                        <p>2023 Suzuki GSR1000RR</p>
                        <p><i>MSRP * $23,999</i></p>
                        <ButtonGroup>
          <Button
            onClick={() => {
              const price = 23999;
              minus(price);
              cut(price);
            }}
          >
            {" "}
            <RemoveIcon fontSize="small" />
          </Button>
          <Button
            onClick={() => {
              const name = '2023 Suzuki GSXR1000RR';
              const price = 23999;
              plus();
              update(name, price);
            }}
          >
            {" "}
            <AddIcon fontSize="small" />
          </Button>
        </ButtonGroup>
                    </div>
                    <div className='picContainer'>
                        <img src={gsxr750} className='gsxrImg' alt='2023 Suzuki GSXR750RR' />
                        <p>2023 Suzuki GSXR750RR</p>
                        <p><i>MSRP * $13,899</i></p>
                        <ButtonGroup>
          <Button
            onClick={() => {
              const price = 13899;
              minus(price);
              cut(price);
            }}
          >
            {" "}
            <RemoveIcon fontSize="small" />
          </Button>
          <Button
            onClick={() => {
              const name = '2023 Suzuki GSXR750RR';
              const price = 13899;
              plus();
              update(name, price);
            }}
          >
            {" "}
            <AddIcon fontSize="small" />
          </Button>
        </ButtonGroup>
                    </div>
                    <div className='picContainer'>
                        <img src={gsxr600} alt='2023 Suzuki GSXR600RR' />
                        <p>2023 Suzuki GSXR600RR</p>
                        <p><i>MSRP * $12,899</i></p>
                        <ButtonGroup>
          <Button
            onClick={() => {
              const price = 12899;
              minus(price);
              cut(price);
            }}
          >
            {" "}
            <RemoveIcon fontSize="small" />
          </Button>
          <Button
            onClick={() => {
              const name = '2023 Suzuki GSXR600RR';
              const price = 12899;
              plus();
              update(name, price);
            }}
          >
            {" "}
            <AddIcon fontSize="small" />
          </Button>
        </ButtonGroup>
                    </div>
                    <div className='picContainer'>
                        <img src={cbr1000} alt='2023 Honda CBR1000RR' />
                        <p>2023 Honda CBR1000RR</p>
                        <p><i>MSRP * $37,290</i></p>
                        <ButtonGroup>
          <Button
            onClick={() => {
              const price = 37290;
              minus(price);
              cut(price);
            }}
          >
            {" "}
            <RemoveIcon fontSize="small" />
          </Button>
          <Button
            onClick={() => {
              const name = '2023 Honda CBR1000RR';
              const price = 37290;
              plus();
              update(name, price);
            }}
          >
            {" "}
            <AddIcon fontSize="small" />
          </Button>
        </ButtonGroup>
                    </div>
                    <div className='picContainer'>
                        <img src={cbr600} className='cbrImg' alt='2023 Honda CBR600RR' />
                        <p>2023 Honda CBR600RR</p>
                        <p><i>MSRP * $17,701</i></p>
                        <ButtonGroup>
          <Button
            onClick={() => {
              const price = 17701;
              minus(price);
              cut(price);
            }}
          >
            {" "}
            <RemoveIcon fontSize="small" />
          </Button>
          <Button
            onClick={() => {
              const name = '2023 Honda CBR600RR';
              const price = 17701;
              plus();
              update(name, price);
            }}
          >
            {" "}
            <AddIcon fontSize="small" />
          </Button>
        </ButtonGroup>
                    </div>
                    <div className='picContainer'>
                        <img src={r1} alt='2023 Yamaha R1' />
                        <p>2023 Yamaha R1</p>
                        <p><i>MSRP * $22,799</i></p>
                        <ButtonGroup>
          <Button
            onClick={() => {
              const price = 22799;
              minus(price);
              cut(price);
            }}
          >
            {" "}
            <RemoveIcon fontSize="small" />
          </Button>
          <Button
            onClick={() => {
              const name = '2023 Yamaha R1';
              const price = 22799;
              plus();
              update(name, price);
            }}
          >
            {" "}
            <AddIcon fontSize="small" />
          </Button>
        </ButtonGroup>
                    </div>
                    <div className='picContainer'>
                        <img src={r6} alt='2023 Yamaha R6' />
                        <p>2023 Yamaha R6</p>
                        <p><i>MSRP * $15,859</i></p>
                        <ButtonGroup>
          <Button
            onClick={() => {
              const price = 15859;
              minus(price);
              cut(price);
            }}
          >
            {" "}
            <RemoveIcon fontSize="small" />
          </Button>
          <Button
            onClick={() => {
              const name = '2023 Yamaha R6';
              const price = 15859;
              plus();
              update(name, price);
            }}
          >
            {" "}
            <AddIcon fontSize="small" />
          </Button>
        </ButtonGroup>
                    </div>
                    <div className='picContainer'>
                        <img src={bmw} className='bmwImg' alt='2023 BMWS1000RR' />
                        <p>2023 BMWS1000RR</p>
                        <p><i>MSRP * $20,395</i></p>
                        <ButtonGroup>
          <Button
            onClick={() => {
              const price = 20395;
              minus(price);
              cut(price);
            }}
          >
            {" "}
            <RemoveIcon fontSize="small" />
          </Button>
          <Button
            onClick={() => {
              const name = '2023 BMW S1000RR';
              const price = 20395;
              plus();
              update(name, price);
            }}
          >
            {" "}
            <AddIcon fontSize="small" />
          </Button>
        </ButtonGroup>
                    </div>
                    <div className='picContainer'>
                        <img src={aprilla} alt='2023 Aprilla RSV4' />
                        <p>2023 Aprilla RSV4</p>
                        <p><i>MSRP * $27,995</i></p>
                        <ButtonGroup>
          <Button
            onClick={() => {
              const price = 27995;
              minus(price);
              cut(price);
            }}
          >
            {" "}
            <RemoveIcon fontSize="small" />
          </Button>
          <Button
            onClick={() => {
              const name = '2023 Aprilla RSV4';
              const price = 27995;
              plus();
              update(name, price);
            }}
          >
            {" "}
            <AddIcon fontSize="small" />
          </Button>
        </ButtonGroup>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shop;
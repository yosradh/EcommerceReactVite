import React from 'react'
import { FaShippingFast } from "react-icons/fa";
import './IconsStyle.css';
import { FaMoneyCheckDollar } from "react-icons/fa6";
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import { BiSolidTimer } from "react-icons/bi";
import { FaCreditCard } from "react-icons/fa";



export default function IconsHero() {
  return (
    <>
    <div className='IconsContainer'>
      <Stack  direction="row" divider={<Divider id='divider' orientation="vertical"  color='gray' />} spacing={2}>
        
        <div id="IconsP1" >
          <div className='container'>
            <FaShippingFast className="icon" />
            <span className="description">
              <p>Fast Delivery </p>
              <p>Start from 7dt</p>
            </span>
          </div>

          <div className='container'>
            <FaMoneyCheckDollar className="icon" />
            <span className="description">
              <p>Money Guarantee </p>
              <p>7 Days Back</p>
            </span>
          </div>
        </div>
        
        <div id="IconsP2" >

        <div className='container'>
          <BiSolidTimer className="icon" />
          <span className="description">
            <p>365 Day </p>
            <p>For Free Return</p>
          </span>
        </div>

        <div className='container'>
          <FaCreditCard className="icon" />
          <span className="description">
            <p>Payment </p>
            <p>Secure System</p>
          </span>
        </div>
        </div>

      </Stack>
    </div>


       </>

  );
}
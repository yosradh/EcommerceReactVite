import React from 'react'
import { LuShoppingBasket } from "react-icons/lu";
import { HiUser } from "react-icons/hi2";

export default function Header2() {


  return (
    <div className="ContainerHeader2">

      <img src="./logo.png" className="logo" />

      <div>
        <form >
          <label for="search">Search for stuff</label>
          <input id="search" type="search" placeholder="Search..." autofocus required />
          <button type="submit">Go</button>
        </form>
      </div>

      <div className="iconsHeader2">
        <HiUser style={{marginRight:'0.5em'}}/>
        <LuShoppingBasket style={{position:'relative',top:'2px'}}/>

        <div className="badge"><p>2</p></div>

      </div>

    </div>
  )
}

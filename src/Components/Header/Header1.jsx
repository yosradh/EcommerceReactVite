import React from 'react'
import { BsMoonStarsFill } from "react-icons/bs"
import { MdLightMode } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

import './HeaderStyle.css';

export default function Header1({ MoodLight, setMoodLight }) {

  const changeMood = (Mood) => {
    setMoodLight(Mood);
    localStorage.setItem('MoodLight', Mood);
  }

  return (
    <div className="HeaderContainer1">
      <div className="titreHeader">ONLINE_SHOP</div>
      <div className="icons">
        {MoodLight === "light" ? <BsMoonStarsFill className='icone' onClick={() => changeMood('dark')} /> : <MdLightMode color='yellow' className='icone' onClick={() => changeMood('light')} />}

        <select  className="LangueOption">
          <option value="en">EN</option>
          <option value="fr">FR</option>
        </select>

        <FaFacebookSquare className='icone'/>
        <FaSquareInstagram className='icone'/>

      </div>

    </div>
  )
}

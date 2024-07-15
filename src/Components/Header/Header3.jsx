import React from 'react'
import { CgWindows } from "react-icons/cg";
import { FaAngleRight } from "react-icons/fa";
import { MdOutlineBikeScooter } from "react-icons/md";
import { MdOutlineImportantDevices } from "react-icons/md";
import { PiBooksDuotone } from "react-icons/pi";
import { GrGamepad } from "react-icons/gr";
import { PiListFill } from "react-icons/pi";


export default function Header3() {

  return (
      <div className="ContainerHeader2">

        <div className="dropDownCat">
          <button className="BtnCategorie">
            <CgWindows className="IconCatg"/>
            <p>Categories</p>
            <FaAngleRight className="Iconright" />
          </button>

          <div className="dropdown-content">
            <a href="#"><MdOutlineBikeScooter id="iconListe" /> Bikes</a>
            <a href="#"><MdOutlineImportantDevices id="iconListe"/>Electronics</a>
            <a href="#"><PiBooksDuotone id="iconListe"/> Books</a>
            <a href="#"><GrGamepad id="iconListe"/> Games</a>
          </div>
        </div>
        
        {/* si la fenetre est petit  */}
        <div className="dropDownMenu">
          <PiListFill className="BTNMenu" />
          <div className="dropdown-contentMenu">
              <a href="#">Home</a>
              <a href="#">Mega menu</a>
              <a href="#">Pages</a>
          </div>
        
        </div>
        <ul className="ListHeader3">
          <li>Home</li>
          <li>Mega menu</li>
          <li>Pages</li>
        </ul>

      </div>
  )
}

import React from 'react'
import { CgWindows } from "react-icons/cg";
import { FaAngleRight } from "react-icons/fa";
import { GiClothes } from "react-icons/gi";
import { LiaGlassesSolid } from "react-icons/lia";
import { GiConverseShoe } from "react-icons/gi";
import { BsBackpack2 } from "react-icons/bs";


export default function Header3() {
    {/* 
    const [selectedItem,setSelectedItem] = useState("")
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
      // Gestion du clic en dehors du dropdown
      function handleClickOutside(event) {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setIsDropdownOpen(false);
        }
      }
      
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);

    const toggleDropdown = () => {
      setIsDropdownOpen(prevState => !prevState);
    };

    const handleClickInside = (event) => {
      event.stopPropagation();
    };
*/}
  return (
      <div className="ContainerHeader2">

      <div className="dropDownCat" > {/*onClick={handleClickInside} */}
            <button className="BtnCategorie">
              <CgWindows className="IconCatg"/>
              <p>Categories</p>
              <FaAngleRight className="Iconright" />
            </button>

            <div className="dropdown-content" >{/* ref={dropdownRef}*/}
             {/**  <a href="femme" onClick={toggleDropdown}><GiClothes id="iconListe" /> Femme</a>
              <a href="homme" onClick={toggleDropdown}><LiaGlassesSolid id="iconListe"/> Homme</a>
              
              {isDropdownOpen && (
                <div className="dropdown-content1">*/}
                  <a href="vetement"><GiClothes id="iconListe" /> Vêtements</a>
                  <a href="lunette"><LiaGlassesSolid id="iconListe"/> Lunettes</a>
                  <a href="bascket"><GiConverseShoe id="iconListe"/> Basckets</a>
                  <a href="sac"><BsBackpack2 id="iconListe"/> Sacs</a>              
            </div>
          </div>
        
        {/* si la fenetre est petit 
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
*/}
      <div></div>
      </div>
  )
}

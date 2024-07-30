import React, { useEffect, useState } from 'react';
import { HiUser } from "react-icons/hi2";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ConnexionUser from '../Modal/ConnexionUser';
import { Divider } from '@mui/material';
import Inscription from '../Modal/Inscription';
import { Link, useNavigate } from 'react-router-dom';
import { RiShoppingBag3Fill } from "react-icons/ri";
import { CiLogout } from "react-icons/ci";
import { FaUserCheck } from "react-icons/fa6";



export default function Header2 ()  {

  //navigation
  const navigate = useNavigate();

  //pour le modal de profile
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  //fini ici modal profile

  const [user, setUser] = useState({
    NomUser:'',
    email:'',
    password:''
  });

  const RecupureUser = () => {
    const storedUser = localStorage.getItem('user');
    if (storedUser){
      setUser(JSON.parse(storedUser));
    }
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentProductCount, setCurrentProductCount] = useState(localStorage.getItem('shoppingCartCount'));

  useEffect(() => {
    const storedCard = localStorage.getItem('shoppingCartCount') ? localStorage.getItem('shoppingCartCount') : 0;
    if(storedCard){
      setCurrentProductCount(storedCard);
    }
    //pour user
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      RecupureUser();
      setIsLoggedIn(true);
    } 
  }, [currentProductCount]);

  //pour modal connexion 
  const [showModalCnx, setShowModalCnx] = useState(false);
  const handleCloseCnx = () => setShowModalCnx(false);
  const handleShowCnx = () => setShowModalCnx(true);
  const handleDeconnexion=() =>{
    localStorage.removeItem('user');
    localStorage.removeItem('shoppingCartCount');
    localStorage.removeItem('cartItems');
    navigate('/');
    window.location.reload();

  }

  //modal inscription
  const [ShowInscription, setShowInscription] = useState(false);
  const handleCloseInscription = () => setShowInscription(false);
  const handleShowInscription = () => setShowInscription(true);

  return (
    <div className="ContainerHeader2">
      <Link to='/'><img src="./logo.png" alt="logo" className="logo" /></Link>
      
      {isLoggedIn ? (
        <div className="iconsHeader2">
          <HiUser className="IconUser" onClick={handleClick}
            aria-controls={open ? 'account-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
          />

          <Menu anchorEl={anchorEl} id="account-menu" open={open} onClose={handleClose} onClick={handleClose} >
            <MenuItem >
              <FaUserCheck /> {user.NomUser}
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleDeconnexion}>
              <CiLogout />Déconnexion
            </MenuItem>       
          </Menu> 
          
          {/* panier */}
          <div className="badge">
            <Link to="/ShoppingCart"><RiShoppingBag3Fill id="panier" /></Link><p>{currentProductCount?currentProductCount : 0}</p>
          </div>
        </div>
      ) : (
        <div className="BTNUser">
          <span id="BtnConnect" onClick={handleShowCnx}>Connexion</span>
          {/*open modal connexion */}
            
          <span id="BtnInscrit" onClick={handleShowInscription}>Inscription</span>
        </div>
      )}
    
    <ConnexionUser openM={showModalCnx} handleClose={handleCloseCnx} setIsLoggedIn={setIsLoggedIn}/>
    <Inscription openInscription={ShowInscription} handleCloseInscription={handleCloseInscription} setIsLoggedIn={setIsLoggedIn} />
    </div>

  );
}

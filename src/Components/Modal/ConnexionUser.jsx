import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useGetuserByNameQuery } from '../../Services/User';
import './Connexion.css';

export default function ConnexionUser({ openM, handleClose, setIsLoggedIn }) {
  const [email, setEmail] = useState('');
  const { data, error, isLoading } = useGetuserByNameQuery("visiteurs?populate=*");

  const AjouterUser = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleLogin = () => {
    if (data && data.data) {
      const user = data.data.find(user => user.attributes.email === email);
      if (user) {
        const userConnecte = {
          NomUser: user.attributes.NomUser,
          email: user.attributes.email,
          password: user.attributes.password
        };
        AjouterUser(userConnecte);
        setIsLoggedIn(true);
        handleClose();
        window.location.reload();
      } else {
        alert("Email not found, please try again");
      }
    }
  };

  return (
    <div>
      <Modal open={openM} onClose={handleClose}>
        <Box className="Box">
          <table>
            <tr>
              <td id="label">Email address</td>
              <td>
                <input 
                  type="email" 
                  placeholder="name@example.com"  
                  autoFocus 
                  value={email} 
                  onChange={handleEmailChange} 
                  required 
                />
              </td>
            </tr>
            <tr>
              <td>
                <span onClick={handleLogin}>Connexion</span>
              </td>
            </tr>
          </table>
        </Box>
      </Modal>
    </div>
  );
}

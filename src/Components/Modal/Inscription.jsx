import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useGetuserByNameQuery, useCreateUserMutation } from '../../Services/User';
import './Connexion.css';

export default function Inscription({ openInscription, handleCloseInscription, setIsLoggedIn }) {
  const [user, setUser] = useState({
    NomUser: '',
    email: '',
    password: ''
  });

  const { data, error, isLoading } = useGetuserByNameQuery('visiteurs?populate=*');
  const [createUser, createUserResult] = useCreateUserMutation();

  const handleUserChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleInscription = async () => {
    try {
      if (data && data.data) {
        const existingUser = data.data.find(u => u.attributes.email === user.email);
        if (existingUser) {
          alert("Cet email est déjà utilisé, veuillez essayer un autre.");
        } else {
          const result = await createUser({ data: user }).unwrap();
          localStorage.setItem('user', JSON.stringify(result));
          setIsLoggedIn(true);
          handleCloseInscription();
          window.location.reload();

        }
      } else {
        alert("Une erreur s'est produite, veuillez réessayer.");
      }
    } catch (error) {
      console.error("Erreur lors de la création de l'utilisateur :", error);
      alert("Erreur lors de la création de l'utilisateur, veuillez réessayer.");
    }
  };

  return (
    <div>
      <Modal open={openInscription} onClose={handleCloseInscription}>
        <Box className="Box">
          <table>
            <tbody>
              <tr>
                <td id="label">Nom d'utilisateur</td>
                <td>
                  <input
                    type="text"
                    name="NomUser"
                    placeholder="xxxx"
                    autoFocus
                    value={user.NomUser}
                    onChange={handleUserChange}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td id="label">Adresse email</td>
                <td>
                  <input
                    type="email"
                    name="email"
                    placeholder="name@example.com"
                    value={user.email}
                    onChange={handleUserChange}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td id="label">Mot de passe</td>
                <td>
                  <input
                    type="password"
                    name="password"
                    value={user.password}
                    onChange={handleUserChange}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <span onClick={handleInscription}>Inscription</span>
                </td>
              </tr>
            </tbody>
          </table>
        </Box>
      </Modal>
    </div>
  );
}

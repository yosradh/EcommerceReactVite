import Header1 from './Components/Header/Header1';
import Header2 from './Components/Header/Header2';
import './index.css';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import ShoppingCart from './Components/ShoppingCart/ShoppingCart';
import Home from './Components/Home';
import NotFound from './Components/NotFound';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const Categories = [
    { id: 1, nom: 'vetement' },
    { id: 2, nom: 'lunette' },
    { id: 3, nom: 'bascket' },
    { id: 4, nom: 'sac' }
  ];

  const [MoodLight, setMoodLight] = useState(localStorage.getItem('MoodLight') || 'light');

  useEffect(() => {
    localStorage.setItem('MoodLight', MoodLight);
  }, [MoodLight]);

  return (
    <div className={`${MoodLight === 'light' ? 'light' : 'AppContainer'}`}>
      <Header1 MoodLight={MoodLight} setMoodLight={setMoodLight} />
      <Header2 />

      <Routes>
        <Route path="/" element={<Home />} />
        {Categories.map((item) => (
          <Route key={item.id} path={`/${item.nom}`}  element={<Home />} />
        ))}
        <Route path="/ShoppingCart" element={<ShoppingCart />} />
        <Route path="/*" element={<NotFound />} />

      </Routes>
    </div>
  );
}

export default App;

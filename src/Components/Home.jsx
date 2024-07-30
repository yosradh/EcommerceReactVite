import { useEffect, useState } from 'react';
import Header3 from './Header/Header3';
import FooterPage from './Footer/FooterPage';
import Hero from './Hero/Hero';
import Main from './Main/Main';
import '../index.css';

function Home() {
  const [MoodLight, setMoodLight] = useState(localStorage.getItem('MoodLight') || 'light');

  useEffect(() => {
    const Mood = localStorage.getItem('MoodLight');
    setMoodLight(Mood);
  }, [MoodLight]);

  return (
    <div className={`${MoodLight === 'light' ? 'light' : 'AppContainer'}`}>
      <Header3 />
      <Hero />
      <Main />
      <FooterPage />
    </div>
  );
}

export default Home;

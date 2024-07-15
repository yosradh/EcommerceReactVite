import Header3 from './Components/Header/Header3'
import Header1 from './Components/Header/Header1'
import Header2 from './Components/Header/Header2'
import './index.css'
import './App.css'
import { useEffect, useState } from 'react';
import Hero from './Components/Hero/Hero';
import IconsHero from './Components/Hero/IconsHero'
import Main from './Components/Main/Main'
import FooterPage from './Components/Footer/FooterPage'

function App() {

  const [MoodLight, setMoodLight] = useState(localStorage.getItem('MoodLight') || 'light');

  useEffect(() => {
    localStorage.setItem('MoodLight',MoodLight);
  }, [MoodLight])
  


  return (
    <div className={`${MoodLight === 'light' ? 'light' : 'AppContainer'}`} >
      <Header1 MoodLight={MoodLight} setMoodLight={setMoodLight}/>
      <Header2 />
      <Header3 />
     
      <Hero />
      <IconsHero />

      <Main/>

      <FooterPage />

    </div>
  )
}

export default App

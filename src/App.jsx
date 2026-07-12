import { useEffect, useState } from 'react';
import { useLenis } from './hooks/useLenis';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import CustomCursor from './components/CustomCursor/CustomCursor';
import Navbar from './components/Navigation/Navbar';
import NavHUD from './components/Navigation/NavHUD';
import Hero from './components/Hero/Hero';
import UniverseMap from './components/Universe/UniverseMap';
import ProjectsOrbit from './components/ProjectPlanet/ProjectsOrbit';
import TechConstellation from './components/TechConstellation/TechConstellation';
import MissionTimeline from './components/MissionTimeline/MissionTimeline';
import CommandCenter from './components/About/CommandCenter';
import SpaceStation from './components/SpaceStation/SpaceStation';
import Footer from './components/Footer/Footer';

function App() {
  const [ready, setReady] = useState(false);
  useLenis();

  useEffect(() => {
    document.body.style.overflow = ready ? '' : 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [ready]);

  return (
    <div className="cursor-enabled relative bg-void text-ink">
      <div className="noise-overlay" />
      <LoadingScreen onFinished={() => setReady(true)} />
      <CustomCursor />
      <Navbar />
      <NavHUD />

      <main>
        <Hero />
        <UniverseMap />
        <ProjectsOrbit />
        <TechConstellation />
        <MissionTimeline />
        <CommandCenter />
        <SpaceStation />
      </main>

      <Footer />
    </div>
  );
}

export default App;

import './App.css';
import ContactUs from './component/contactUs/contactUs';
import Experience from './component/experiences/experience';
import Header from './component/Header/header';
import Intro from './component/intro/intro';
import EnhancedInteractiveCircles from './component/Skills/skills';
import SkillsDiagram from './component/Skills/skils2';
import Work from './component/works/work';
import Certifications from './component/certifications/certifications';

import { ThemeProvider } from './context/ThemeContext'; // Import Provider

function App() {

  return (
    <ThemeProvider>
      <div className="font-lora px-6 md:px-20 min-h-screen bg-background text-text-main transition-colors duration-300">
        <div className=''>
          <Header />
          <Intro />
        </div>
      <SkillsDiagram/> 
 <Work />
        <Experience />
        <Certifications />
        <ContactUs />
      </div>
    </ThemeProvider>
  );
}

export default App;

import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Contact from './Components/Pages/Contact/Contact';
import Home from './Components/Pages/Home/Home';
import Projects from './Components/Pages/Projects/Projects';
import Skills from './Components/Pages/Skills/Skills';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='pages-container'>
        <Home/>
        <Skills/>
        <Projects/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;

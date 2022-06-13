import './App.css';
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Expertise from './components/Expertise/Expertise'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div>
     <Navbar />
     <Home />
     <Expertise />
     <Projects />
     <Footer />
    </div>
  );
}

export default App;

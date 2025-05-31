import { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import './App.css';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Portfolio from './components/Portfolio.jsx';
import Blog from './components/Blog.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import { Toaster } from 'react-hot-toast';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Navbar />
        <Home />
        <About />
        <Portfolio />
        <Blog />
        <Contact />
        <Footer />
      </div>
      <Toaster />
    </>
  );
}

export default App;

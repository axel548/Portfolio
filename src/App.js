import './App.scss';
import NavBar from './Components/NavBar';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import PortfoliosPage from './Pages/PortfoliosPage';
import BlogsPage from './Pages/BlogsPage';
import ContactPage from './Pages/ContactPage';
import { useState } from 'react';

import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  const [navToggle, setNavToggle] = useState(false);
  const navClick = () => {
    setNavToggle(!navToggle)
  }
  return (

    <BrowserRouter>
      <div className="App">
        <div class={`sidebar ${navToggle ? 'nav-toggle' : ''}`}>
          <NavBar />
        </div>
        <div className="nav-btn" onClick={navClick} >
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="line-3"></div>
        </div>
        <div class="main-content">
          <div className="content">

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/portfolios" element={<Portfolio />} />
              <Route path="/certifieds" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>

  );
}

function Home() {
  return (
    <HomePage />
  );
}

function About() {
  return (
    <AboutPage />
  );
}

function Portfolio() {
  return (
    <PortfoliosPage />
  );
}

function Blog() {
  return (
    <BlogsPage />
  );
}

function Contact() {
  return (
    <ContactPage />
  );
}



export default App;

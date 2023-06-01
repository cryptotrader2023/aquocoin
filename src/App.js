import React, { useRef, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import HowToBuy from './components/HowToBuy';
import Tokenomics from './components/Tokenomics';
import Roadmap from './components/Roadmap';
import BuyNow from './components/BuyNow';
import Divider from './components/Divider';
import Island from './components/Island';
import TopDivider from './components/TopDivider';
import logo from './aquologo.png'; // Import the logo image
import './custom-styles.css'; // Import the custom CSS file
import './menu.css'; // Import the custom CSS file
import './ColorStyles.css'; 

import whitepaper from './whitepaper.pdf';
import { Link } from 'react-router-dom';

const App = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const howToBuyRef = useRef(null);
  const tokenomicsRef = useRef(null);
  const roadmapRef = useRef(null);
  const buyNowRef = useRef(null);
  const islandRef = useRef(null);
  const [expanded, setExpanded] = useState(false);

  const scrollToSection = (ref) => {
    const offset = -10; // Adjust the offset as needed

    ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
      offset: offset,
    });
  };

  return (
    <Container>
      <Navbar expand="lg" expanded={expanded} className="navbar">
        <Navbar.Brand href="#">
          <img src={logo} alt="Logo" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle
          onClick={() => setExpanded(!expanded)}
          aria-controls="navbar-nav"
          className="navbar-toggler"
        />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home" onClick={() => scrollToSection(homeRef)} className="nav-link">
              Home
            </Nav.Link>
            <Nav.Link href="#about" onClick={() => scrollToSection(aboutRef)} className="nav-link">
              About Us
            </Nav.Link>
            <Nav.Link href="#howToBuy" onClick={() => scrollToSection(howToBuyRef)} className="nav-link">
              How to Buy
            </Nav.Link>
            <Nav.Link href="#tokenomics" onClick={() => scrollToSection(tokenomicsRef)} className="nav-link">
              Tokenomics
            </Nav.Link>
            <Nav.Link href="#roadmap" onClick={() => scrollToSection(roadmapRef)} className="nav-link">
              Roadmap
            </Nav.Link>
            <Nav.Link href="#buyNow" onClick={() => scrollToSection(buyNowRef)} className="nav-link">
              Buy Now
            </Nav.Link>
            <Nav.Link href="#island" onClick={() => scrollToSection(islandRef)} className="nav-link">
              Island
            </Nav.Link>
            <Nav.Link as={Link} to={whitepaper} target="_blank" className="nav-link">
              Whitepaper
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <TopDivider />
      <div ref={homeRef} className="section">
        <Home />
      </div>

      <Divider />

      <div ref={aboutRef} className="section">
        <AboutUs />
      </div>

      <Divider />

      <div ref={howToBuyRef} className="section">
        <HowToBuy />
      </div>

      <Divider />

      <div ref={tokenomicsRef} className="section">
        <Tokenomics />
      </div>

      <Divider />

      <div ref={roadmapRef} className="section">
        <Roadmap />
      </div>

      <Divider />

      <div ref={islandRef} className="section">
        <Island />
      </div>
      <Divider />

      <div ref={buyNowRef} className="section">
        <BuyNow />
      </div>
    </Container>
  );
};

export default App;


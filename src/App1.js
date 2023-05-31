import React, { useRef } from 'react';
import { Container, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import HowToBuy from './components/HowToBuy';
import Tokenomics from './components/Tokenomics';
import Roadmap from './components/Roadmap';
import BuyNow from './components/BuyNow';
import Divider from './components/Divider';
import logo from './logo.png'; // Import the logo image
import './custom-styles.css'; // Import the custom CSS file
import './ColorStyles.css'; 

const App = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const howToBuyRef = useRef(null);
  const tokenomicsRef = useRef(null);
  const roadmapRef = useRef(null);
  const buyNowRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <Container>
      <div className="d-flex align-items-center justify-content-between">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>

 <Nav variant="tabs" defaultActiveKey="#home" className="d-flex justify-content-center flex-grow-1">
          <Nav.Item>
            <Nav.Link href="#home" onClick={() => scrollToSection(homeRef)} className="custom-menu-item">
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#about" onClick={() => scrollToSection(aboutRef)} className="custom-menu-item">
              About Us
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#howToBuy" onClick={() => scrollToSection(howToBuyRef)} className="custom-menu-item">
              How to Buy
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#tokenomics" onClick={() => scrollToSection(tokenomicsRef)} className="custom-menu-item">
              Tokenomics
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#roadmap" onClick={() => scrollToSection(roadmapRef)} className="custom-menu-item">
              Roadmap
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#buyNow" onClick={() => scrollToSection(buyNowRef)} className="custom-menu-item">
              Buy Now
            </Nav.Link>
          </Nav.Item>
        </Nav>

      </div>

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
      <div ref={buyNowRef} className="section">
        <BuyNow />
      </div>
    </Container>
  );
};

export default App;


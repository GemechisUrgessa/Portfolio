import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import NavBar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import {AiOutlineArrowUp} from "react-icons/ai";
function App() {
  const [load, upadateLoad] = useState(true);
  function scrollToTop() {
            window.scrollTo({
              top: 0,
              behavior: "smooth"
            });
          }
  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <div style={{position: "fixed", bottom: 10, right: 10, zIndex: "9999"}} >
          <Button className="scroll-to-top" style={{color: "white", fontSize: "1.4rem"}} onClick={scrollToTop}>
              <AiOutlineArrowUp />
          </Button>
        </div>
        <NavBar />
        <Home />
        <About />
        <Projects />
        <Resume />
        <Routes>
        </Routes>
        <Footer />
      </div>
    </Router>
    // <>
    
    // </>
  );
}

export default App;

import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../App.css";
import dashboard from "../img/dashboard.png";
import cafesite from "../img/cafe-site.png";
import p4p from "../img/p4p.png";
// import fantasyfighter from "../img/fantasyfighter.png";

const Container = styled.div`
  font-size: 2em;
  text-align: right;
  font-family: sans-serif;
`;

function Splash() {
  return (
    <div>
      <p className="big-title floating">
        &#123;&#123; Menilek.tech/ane &#125;&#125;
      </p>
      <div className="grid">
        <div className="cell">
          <Container>
            <a href="http://www.gillianscafe.co.uk/">
              <i class="fas fa-utensils"></i>
            </a>
          </Container>
          <a href="http://www.gillianscafe.co.uk/">
            <img src={cafesite} className="site-thumb" alt="site thumbnail" />
          </a>
        </div>
        <div className="cell">
          <Container>
            <a href="https://github.com/Menilek/ip-dashboard">
              <i class="fab fa-github"></i>
            </a>
          </Container>
          <Link to="/ane/dashboard">
            <img src={dashboard} className="site-thumb" alt="site thumbnail" />
          </Link>
          {/* <a href="http://menilek.tech/ane/dashboard">
            <img src={dashboard} className="site-thumb" alt="site thumbnail" />
          </a> */}
        </div>
        <div className="cell">
          <Container>
            <a href="https://github.com/Menilek/PoundForPound">
              <i class="fab fa-github"></i>
            </a>
          </Container>
          <a href="https://top-fighters.herokuapp.com/">
            <img src={p4p} className="site-thumb" alt="site thumbnail" />
          </a>
        </div>
        {/* <div className="cell">
          <Container>
            <a href="https://github.com/Menilek/FantasyFighter">
              <i class="fab fa-github"></i>
            </a>
          </Container>
          <a href="https://fantasyfighter.herokuapp.com/">
            <img
              src={fantasyfighter}
              className="site-thumb"
              alt="site thumbnail"
            />
          </a>
        </div> */}
      </div>
    </div>
  );
}

export default Splash;

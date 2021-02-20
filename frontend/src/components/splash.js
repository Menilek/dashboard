import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "reactstrap";
import "../App.css";
import dashboard from "../img/dashboard.png";
import cafesite from "../img/cafe-site.png";
import p4p from "../img/p4p.png";
// import fantasyfighter from "../img/fantasyfighter.png";

function Splash() {
  return (
    <div>
      <div className="grid">
        <Row>
          <Col sm={12} md={12} lg={12}>
            <h1 className="big-title floating">
              &#123; menilek.tech/ane &#125;
            </h1>
          </Col>
        </Row>
        <Row className="site-collection">
          <Col sm={12} md={12} lg={4}>
            <div className="cell">
              <a href="http://www.gillianscafe.co.uk/">
                <i class="fas fa-utensils"></i>
              </a>
              <a href="http://www.gillianscafe.co.uk/">
                <img
                  src={cafesite}
                  className="site-thumb"
                  alt="site thumbnail"
                />
              </a>
            </div>
          </Col>
          <Col sm={12} md={12} lg={4}>
            <div className="cell">
              <a href="https://github.com/Menilek/ip-dashboard">
                <i class="fab fa-github"></i>
              </a>
              <Link to="/ane/dashboard">
                <img
                  src={dashboard}
                  className="site-thumb"
                  alt="site thumbnail"
                />
              </Link>
            </div>
          </Col>
          <Col sm={12} md={12} lg={4}>
            <div className="cell">
              <a href="https://github.com/Menilek/PoundForPound">
                <i class="fab fa-github"></i>
              </a>
              <a href="https://top-fighters.herokuapp.com/">
                <img src={p4p} className="site-thumb" alt="site thumbnail" />
              </a>
            </div>
          </Col>
        </Row>
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

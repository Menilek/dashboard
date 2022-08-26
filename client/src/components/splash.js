import React from 'react';
import { Row, Col } from 'reactstrap';
import '../App.css';
import dictionary from '../assets/img/dictionary.gif';
import flashcards from '../assets/img/amharic-flashcards.gif';
import p4p from '../assets/img/p4p.png';

function Splash() {
  return (
    <div>
      <div className="grid">
        <Row>
          <Col sm={12} md={12} lg={12}>
            <h1 className="big-title floating">&#123; menilek.tech/ane &#125;</h1>
          </Col>
        </Row>
        <Row className="site-collection">
          <Col sm={12} md={12} lg={4}>
            <div className="cell">
              <a href="https://github.com/Menilek/amharic-flashcards">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://basic-amharic.vercel.app/">
                <img src={flashcards} className="site-thumb" alt="site thumbnail" />
              </a>
            </div>
          </Col>
          <Col sm={12} md={12} lg={4}>
            <div className="cell">
              <a href="https://github.com/Menilek/PoundForPound">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://top-fighters.herokuapp.com/">
                <img src={p4p} className="site-thumb" alt="site thumbnail" />
              </a>
            </div>
          </Col>
          <Col sm={12} md={12} lg={4}>
            <div className="cell">
              <a href="https://github.com/Menilek/amharic-dictionary">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://amharic-dictionary.vercel.app/">
                <img src={dictionary} className="site-thumb" alt="site thumbnail" />
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

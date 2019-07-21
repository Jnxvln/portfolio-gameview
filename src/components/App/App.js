import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap'
import GameSearch from '../GameSearch'
import GameResults from '../GameResults'
import GameDetail from '../GameDetail'
import SiteFooter from '../SiteFooter'
import './App.css';

function App() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <div class="jumbotron jumbotron-fluid">
              <h1 className="text-center">Gameview</h1>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <GameSearch/>
          </Col>
        </Row>
        <Row>
          <Col>
            <GameResults/>
          </Col>
        </Row>
        <Row>
          <Col>
            <GameDetail/>
          </Col>
        </Row>
        <Row>
          <Col>
            <SiteFooter/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

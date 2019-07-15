import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from './logo.svg';
import './App.css';
import NewUserButton from './NewUserButton';

const App = () => {
  return (
    <Container>
        <Row><h1 className="App-header">React App with Hooks</h1></Row>
        <Row>
            <Col>
                <Row>
                    <Col><NewUserButton /></Col>
                </Row>
            </Col>
            <Col>
                <h2>View users</h2>
            </Col>
        </Row>
    </Container>
  )
}

export default App;

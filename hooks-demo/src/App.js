import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';
import NewUserButton from './NewUserButton';
import NewUserForm from './NewUserForm';
import UserTable from './UserTable';

const App = () => {
    const usersData = [
      { id: 1, name: 'Harry', email: 'harrypotter@hogwarts.com' },
      { id: 2, name: 'Ron', email: 'ronweasley@hogwarts.com' },
      { id: 3, name: 'Hermione', email: 'hermioneg@hogwarts.com' },
    ]

  return (
    <Container>
        <Row><h1 className="App-header m-5">React App with Hooks</h1></Row>
        <Row className="m-5">
            <Col md={{ span: 5 }} >
                <Row>
                    <Col className="p-0"><NewUserButton /></Col>
                </Row>
            </Col>
            <Col  md={{ span: 4, offset: 3 }}>
                <Row>
                    <h2>View users</h2>
                </Row>
            </Col>
        </Row>
        <Row className="m-5">
            <Col md={{ span: 5 }}>
                <Row>
                    <NewUserForm visible={false} />
                </Row>
            </Col>
            <Col  md={{ span: 6, offset: 1 }}>
                <Row>
                    <UserTable users={usersData}/>
                </Row>
            </Col>
        </Row>
    </Container>
  )
}

export default App;

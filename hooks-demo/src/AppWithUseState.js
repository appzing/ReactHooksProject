import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from './logo.svg';
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

    const [users, setUsers] = useState(usersData);
    const [showForm, setShowForm] = useState(false);

    return (
        <Container>
            <Row><h1 className="App-header m-5">React App with Hooks</h1></Row>
            <Row className="m-5">
                <Col md={{ span: 5 }} >
                    <Row>
                        <Col className="p-0"><NewUserButton onClick={setShowForm} /></Col>
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
                        <NewUserForm visible={showForm} />
                    </Row>
                </Col>
                <Col  md={{ span: 6, offset: 1 }}>
                    <Row>
                        <UserTable users={usersData} />
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default App;

import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';
import NewUserButton from './NewUserButton';
import EditUserForm from './EditUserForm';
import NewUserForm from './NewUserForm';
import UserTable from './UserTable';
import useBoolean from './customHooks/useBoolean';
import useDataFetching from './customHooks/useDataFetching';

const App = () => {
    const usersData = [
      { id: 1, name: 'Harry', email: 'harrypotter@hogwarts.com' },
      { id: 2, name: 'Ron', email: 'ronweasley@hogwarts.com' },
      { id: 3, name: 'Hermione', email: 'hermioneg@hogwarts.com' },
    ]

    const [users, setUsers] = useState(usersData);
    const [isFormVisible, showForm, hideForm] = useBoolean(false);
    const [isEditing, editing, stopEditing] = useBoolean(false);
    const [currentUser, setCurrentUser] = useState({ id: null, name: '', email: '' });

    //Fetch data with custom hook
    const [{ data, isLoading, isError }, doFetch] = useDataFetching();

    const addUser = (user) => {
        user.id = users.length + 1;
        setUsers([...users, user])
        hideForm();
    }

    const deleteUser = (id) => {
        setUsers(users.filter(user => user.id !== id))
    }

    const editUser = ({ id, name, email }) => {
        editing();
        setCurrentUser({ id, name, email });
    }

    const updateUser = (id, updatedUser) => {
        stopEditing();
        setUsers(users.map(user => (user.id === id ? updatedUser : user)));
        hideForm();
    }

    useEffect(() => {
        doFetch('https://randomuser.me/api/');

    }, [])

    useEffect(() => {
        console.log(data);
    }, [data])

    useEffect(() => {
        stopEditing();
        hideForm();
    }, [users])

    return (
        <Container>
            <Row><h1 className="App-header m-5">React App with Hooks</h1></Row>
            <Row className="m-5">
                <Col md={{ span: 5 }} >
                    <Row>
                        <Col className="p-0"><NewUserButton onClick={showForm} /></Col>
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
                    {isEditing ? (<>
                        <Row>
                            <EditUserForm isEditing={isEditing} currentUser={currentUser} updateUser={updateUser} cancel={stopEditing}/>
                        </Row>
                    </>) : (<>
                        <Row>
                            <NewUserForm visible={isFormVisible} addUser={addUser}/>
                        </Row>
                    </>)}
                </Col>
                <Col  md={{ span: 6, offset: 1 }}>
                    <Row>
                        <UserTable users={users} deleteUser={deleteUser} editUser={editUser}/>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default App;

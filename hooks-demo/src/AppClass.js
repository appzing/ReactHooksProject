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

const usersData = [
  { id: 1, name: 'Harry', email: 'harrypotter@hogwarts.com' },
  { id: 2, name: 'Ron', email: 'ronweasley@hogwarts.com' },
  { id: 3, name: 'Hermione', email: 'hermioneg@hogwarts.com' },
];

class App extends React.Component {

    state = {
        users: usersData,
        isFormVisible: false,
        isEditing: false,
        currentUser: { id: null, name: '', email: '' },
    }

    componentDidMount() {
        // Fetch data
    }

    // componentDidUpdate(prevProps, prevState) {
    //     if (this.state.users != prevState.users) {
    //         this.setState({
    //             isEditing: false,
    //             isFormVisible: false,
    //         })
    //     }
    // }

    showForm = () => {
        this.setState({ isFormVisible: true});
    }

    hideForm = () => {
        this.setState({ isFormVisible: false});
    }

    addUser = (user) => {
        const { users } = this.state;
        user.id = users.length + 1;
        this.setState({...this.state, users: [...users, user]})
        this.hideForm();
    }

    deleteUser = (id) => {
        const newUsers = this.state.users.filter(user => user.id !== id);
        this.setState({users: newUsers});
    }

    editUser = ({ id, name, email }) => {
        this.setState({
            isEditing: true,
            currentUser: { id, name, email }
        });
    }

    updateUser = (id, updatedUser) => {
        const users = this.state.users.map(user => (user.id === id ? updatedUser : user))
        this.setState({
            isEditing: false,
            isFormVisible: false,
            users,
        })
    }

    render() {
        const { isEditing, currentUser, isFormVisible, users } = this.state;

        return (
            <Container>
                <Row><h1 className="App-header m-5">React App with Hooks</h1></Row>
                <Row className="m-5">
                    <Col md={{ span: 5 }} >
                        <Row>
                            <Col className="p-0"><NewUserButton onClick={this.showForm} /></Col>
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
                                <EditUserForm isEditing={isEditing} currentUser={currentUser} updateUser={this.updateUser} cancel={() => this.setState({isEditing: false})}/>
                            </Row>
                        </>) : (<>
                            <Row>
                                <NewUserForm visible={isFormVisible} addUser={this.addUser}/>
                            </Row>
                        </>)}
                    </Col>
                    <Col  md={{ span: 6, offset: 1 }}>
                        <Row>
                            <UserTable users={users} deleteUser={this.deleteUser} editUser={this.editUser}/>
                        </Row>
                    </Col>
                </Row>
            </Container>
        )
    }

}

export default App;

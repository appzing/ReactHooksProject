import React from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';

const UserTable = ({users, deleteUser, editUser}) => (
  <Table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
        {users.length > 0 ? (
            users.map(user => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <Row>
                      <Button variant="outline-secondary" size="sm" className="mr-3" onClick={() => editUser(user)}>Edit</Button>
                      <Button variant="outline-secondary" size="sm" className="mr-3" onClick={() => deleteUser(user.id)}>Delete</Button>
                    </Row>
                  </td>
                </tr>
            ))
        ) : (
            <tr>
              <td>No users</td>
            </tr>
        )}

    </tbody>
  </Table>
)

export default UserTable

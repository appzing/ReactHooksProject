import React from 'react';
import Button from 'react-bootstrap/Button';

//<Button variant="primary" className="new-user-button" onClick={() => props.onClick()}>Add New User</Button>

export default function (props) {
    return (
        <Button variant="primary" className="new-user-button">Add New User</Button>
    );

}

import React from 'react';
import Button from 'react-bootstrap/Button';

export default function (props) {
    return (
        <Button variant="primary" className="new-user-button" onClick={() => props.onClick()}>Add New User</Button>
    );

}

import React, { useState } from 'react';

const NewUserForm = ({ visible, addUser }) => {

    const initialFormState = { id: null, name: '', email: '' };
    const [user, setUser] = useState(initialFormState)

    const handleInputChange = event => {
      const { name, value } = event.target

      setUser({ ...user, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!user.name || !user.email) return

        addUser(user);
        setUser(initialFormState);
    }
    return visible && (
        <form onSubmit={handleSubmit}>
            <h2>Add User</h2>
          <div className="form-group">
            <label htmlFor="exampleInputName1">Name</label>
            <input type="text" className="form-control" id="exampleInputName1" placeholder="Name" name="name" onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name="email" onChange={handleInputChange} />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
};

export default NewUserForm;

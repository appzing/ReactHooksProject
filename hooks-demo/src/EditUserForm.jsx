import React, { useState, useEffect } from 'react'

const EditUserForm = ({ isEditing, updateUser, currentUser, cancel }) => {
  const initialFormState = { id: null, name: '', email: '' }
  const [user, setUser] = useState(currentUser)

  const handleInputChange = event => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  const handleSubmit = (e) => {
      e.preventDefault();
      if (!user.name || !user.email) return

      updateUser(user.id, user);
      setUser(initialFormState);
    }

    useEffect(() => {
        setUser(currentUser)
    }, [currentUser])

  return isEditing && (
      <form onSubmit={handleSubmit}>
        <h2>Edit User</h2>
        <div className="form-group">
          <label htmlFor="exampleInputName1">Name</label>
          <input
              type="text"
              className="form-control"
              id="exampleInputName1"
              placeholder="Name"
              name="name"
              onChange={handleInputChange}
              value={user.name}/>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            name="email"
            onChange={handleInputChange}
            value={user.email}
        />
        </div>
        <button type="submit" className="btn btn-primary">Update</button>
        <button type="cancel" className="btn" onClick={() => cancel()}>Cancel</button>
      </form>
  )
};

export default EditUserForm;

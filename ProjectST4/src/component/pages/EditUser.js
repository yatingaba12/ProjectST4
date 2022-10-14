import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  let Navigate = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: ""
  });

  const { name, password, email} = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put("http://localhost:3003/users/${id}", user);
    Navigate("/");
  };

  const loadUser = async () => {
    const result = await axios.get("http://localhost:3003/users/${id}");
    setUser(result.data);
  };
  return (
    <div>
        <h2>Edit A User</h2>
        <form onSubmit={e => onSubmit(e)}>
            <input
              type="text"
              placeholder="Enter Your Name"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
            <input
              type="text"
              placeholder="Enter Your Username"
              name="password"
              value={password}
              onChange={e => onInputChange(e)}
            />
            <input
              type="email"
              placeholder="Enter Your E-mail Address"
              name="email"
              value={email}
              onChange={e => onInputChange(e)}
            />
          <button className="btn btn-warning btn-block">Update User</button>
        </form>
        </div>
  );
};

export default EditUser;

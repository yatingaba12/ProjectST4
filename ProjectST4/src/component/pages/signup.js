import React, { useState } from "react";
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom";
import "./singup.css"

const Signup = () => {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "" 
  });

  const { name, email, password} = user;

  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(e.target.value);
  
  };

  const onSubmit = async e => {
    e.preventDefault();
    if(user.name!=""&&user.email!=""&&user.password!=""){await axios.post("http://localhost:3003/users", user);
    navigate("/crud");}
    else{
      alert("no value");
    }

  };

  return (
    <div className="container">
        <h2>SIGN UP</h2>
        <form className="form" onSubmit={e => onSubmit(e)}>
            <input
              type="text"
              className="in"
              placeholder="Enter Your Name"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
            <input
              type="text"
              className="in"
              placeholder="Enter Your email"
              name="email"
              value={email}
              onChange={e => onInputChange(e)
              }
            />
            <input
              type="password"
              className="in"
              placeholder="Enter Your password"
              name="password"
              value={password}
              onChange={e => onInputChange(e)}
            />  
          <button className="subtn">Submit</button>
        </form>
        <div ><Link className="linkto" to="/login">if you have account ?</Link></div>
        
      </div>
  );
};

export default Signup;

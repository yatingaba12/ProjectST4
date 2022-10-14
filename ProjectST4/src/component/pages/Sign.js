import React from "react";
import { Form, Link } from "react-router-dom";
import "./singup.css"

const Sign = () => {

    return(
        <div className="container">
            <h2>SIGN IN</h2>
            <form className="form">
                <input 
                    type="text"
                    className="in"
                    placeholder="Enter Your Name"
                    name="name"
                />
                <input 
                    type="password"
                    className="in"
                    placeholder="Enter Your Email"
                    name="name"
                />
                <button className="subtn" >Submit</button>
            </form>
            <div ><Link className="linkto" to="/signup">if don't have a account ?</Link></div>
        </div>
    );
}
export default Sign;
import React from "react";
import MyComponent from "./maps";
import './contact.css'
const Contact=()=>{
    return(
        <>
        <main>
        <div className="cont">
            <h2>Contact Information</h2>
            <p>Address: </p>
            <p>Phone: +91 797-358-5105</p>
            <p>Email: akash0816.be20@chitkara.edu.in</p>
            <p>Website: Myworld.com</p>
        </div>
        
        <div className="loginf">
        <div>Do you have any questions?</div>
        <input type="text" placeholder="Name"/>
        <input type="email" placeholder="Email"/>
        <input type="text" placeholder="Subject"/>
        <input type="text" placeholder="Message"/>
        <button>Submit</button>
        </div>
        <div className="map">
            <MyComponent/>
        </div>
        </main>
        </>
    );
}
export default Contact;
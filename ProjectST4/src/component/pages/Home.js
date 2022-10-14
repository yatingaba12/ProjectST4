import React from "react";
import { Link } from "react-router-dom";
import './home.css'

const Home = () => {
    return(
        <div className="main">
            <div className="p">EXPLORE<br/> YOUR <br/> POTENTIAL!!!<br/>
            <Link to="/crud" className="linkh">OPEN CRUD TABLE</Link>
            </div>
        </div>
    );
}
export default Home;
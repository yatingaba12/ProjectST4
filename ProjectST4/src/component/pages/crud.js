import React from "react";
import axios from "axios";
import { useState , useEffect } from "react";
import { Link } from "react-router-dom";
import './crud.css'

const Crud = () => {
        const [users, setUser] = useState([]);
      
        useEffect(() => {
          loadUsers();
        }, []);
      
        const loadUsers = async () => {
          const result = await axios.get("http://localhost:3003/users");
          setUser(result.data);
        };
        const deleteUser = async id => {
            await axios.delete(`http://localhost:3003/users/${id}`);
            loadUsers();
        };
    return(
        <div className="main">
            <table>
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Password</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                        users.map((user, index)=>(
                            <tr>
                                <th scope="row">{index+1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.password}</td>
                                <td>
                                    <Link className="btn" to={"/edit/${user.id}"}>edit</Link>
                                    <Link className="btn" onClick={() => deleteUser(user.id)}>delete</Link>
                                </td>
                            </tr>
                        )) 
                        }
                    </tbody>
                
            </table>
        </div>
    );
}
export default Crud;
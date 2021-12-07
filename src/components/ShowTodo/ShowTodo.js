import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const ShowTodo =() => {
   
        const [users, setUser] = useState([]);
        
        useEffect(() => {
          console.log("hey");
           loadData();
        }, [])
    
        const loadData = async () => {
            const result = await axios.get("http://localhost:3003/users");
            console.log("result",result);
            setUser(result.data.reverse());
        };

        const deleteTodo = async (id) => {
            let user = await axios.get(`http://localhost:3003/users/${id}`);
            await axios.put(`http://localhost:3003/users/${id}`, {...user.data, status:"deleted"});
            loadData();
        }

        const completeTodo = async (id) => {
          let user = await axios.get(`http://localhost:3003/users/${id}`);
          await axios.put(`http://localhost:3003/users/${id}`, {...user.data, status:"completed"});
          loadData();
      }
        return (
            <div className="container">
            <div className="py-4">
              <h1>Show Todo List</h1>
              <table className="table border shadow sortable">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">TaskName</th>
                    <th>Description</th>
                    <th>Date</th>
                   <th>Time</th>
                   <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, index) => (
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td>{user.taskName}</td>
                      <td>{user.description}</td>
                      <td>{user.date}</td>
                      <td>{user.time}</td>
                      <td>
                        <Link className="btn btn-primary mr-2" to={`/complete`}
                         onClick={() => completeTodo(user.id)}
                        >
                          complete
                        </Link>
                        <Link
                          className="btn btn-outline-primary mr-2"
                          to={`/edit/${user.id}`}
                        >
                          Edit
                        </Link>
                        <Link
                          className="btn btn-danger"
                           onClick={() => deleteTodo(user.id)}
                          to={`/delete`}
                        >
                          Delete
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>                        
        )
    }
    


export default ShowTodo

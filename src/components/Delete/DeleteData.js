import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

function DeleteData() {
  // const { id } = useParams();
  const [users, setUser] = useState([]);


  useEffect(() => {
    console.log("hey");
    loadData();
  }, [])

  const loadData = async () => {
    const result = await axios.get(`http://localhost:3003/users`);
    console.log("result", result);
    let deletedTask = result.data.filter((d) => d.status == "deleted")
    setUser(deletedTask);
  };

  const deletePermanantTodo = async (id) => {
    await axios.delete(`http://localhost:3003/users/${id}`);
    loadData();
  }
  return (
    <div className="container">
      <div className="py-4">
        <h1>Deleted Todo List</h1>
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
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{user.taskName}</td>
                <td>{user.description}</td>
                <td>{user.date}</td>
                <td>{user.time}</td>
                <td>
                  <Link className="btn btn-primary mr-2">
                    undo
                  </Link>
                  <Link
                    className="btn btn-danger"
                    onClick={() => deletePermanantTodo(user.id)}
                  >
                    Permanant Delete
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

export default DeleteData

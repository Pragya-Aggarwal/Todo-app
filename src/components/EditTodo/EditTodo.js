import React, { useState, useEffect } from "react";
import axios from "axios";
import {  useParams, useHistory } from "react-router-dom";


const EditTodo = () => {
  let history = useHistory();
  const { id } = useParams();
  const [user, setUser] = useState({
    taskName :"",
    description : "",
    date : "",
    time: "",
  });

  const { taskName, description, date, time } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:3003/users/${id}`, user);
    history.push("/show");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3003/users/${id}`);
    setUser(result.data);
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit Task</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Task"
              name="taskName"
              value={taskName}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <textarea
              className="form-control form-control-lg"
              placeholder="Enter Description"
              name="description"
              value={description}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="date"
              className="form-control form-control-lg"
              placeholder="Enter Date"
              name="date"
              value={date}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="time"
              className="form-control form-control-lg"
              placeholder="Enter Time"
              name="time"
              value={time}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-primary btn-block">Update Task</button>
        </form>
      </div>
    
    </div>
  )
}

export default EditTodo





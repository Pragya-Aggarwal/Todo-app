
import axios from 'axios';
import React, { useState } from 'react'
import './CreateTodo.css';
import { useHistory } from "react-router-dom";


const CreateTodo =() => {
    let history = useHistory();
   const [user, setUser] = useState({
    taskName :"",
    description : "",
    date : "",
    time: "",
   });

   let token = localStorage.getItem("token")

   let loggedIn = true;
   if(token == null){
     loggedIn = false;
     history.push("/login");
   }



   const { taskName, description, date, time } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3003/users", user);
    history.push("/show");
  };
  console.log("history",history);
    return (
        <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add Task</h2>
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
          <button className="btn btn-primary btn-block">Add Task</button>
        </form>
      </div>
    </div>
  );
}

export default CreateTodo;


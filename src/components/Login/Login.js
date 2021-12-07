import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router';


function Login() {
    let history = useHistory();
    const [user, setUser] = useState({
        name : "",
    });
     const [loggedIn, setLoggedIn] = useState(false)
   
   
     useEffect(() => {
        let token = localStorage.getItem("token")
        if(token == null){
            setLoggedIn(false);
            history.push("/login");
          }
    }, [])
   
    const {name} = user;
    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
      };
       const onSubmit = async e => {
        e.preventDefault();
       if(name){
           localStorage.setItem("token", "token");
           localStorage.setItem("name", JSON.stringify(name));
           setLoggedIn(true);
           history.push("/create");
       }
      };
    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Login Form</h2>
                <form onSubmit={e => this.onSubmit(e)}>
                <div className="form-group">
                    <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Enter Name"
                    name="name"
                    value={user.name}
                    onChange={(e) =>onInputChange(e)}
                    />
                </div>
                
                <button className="btn btn-primary btn-block" onClick={(e) => onSubmit(e)}>Sign In</button>
                </form>
            </div>
            
        </div>
    )
}

export default Login





      
     















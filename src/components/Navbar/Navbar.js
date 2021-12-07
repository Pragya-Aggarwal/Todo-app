import React from 'react'
import {Link, useHistory, NavLink} from 'react-router-dom'

export default function Navbar() {
    let history = useHistory();
    let name= JSON.parse(localStorage.getItem("name")) ?? "";

    const onLogout = async e => {
        e.preventDefault();
        history.push("/login");
        localStorage.removeItem("name");
        localStorage.removeItem("token");
      };
    

    return (
        <div>
             <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
            <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
                <Link className="navbar-brand" href="/">
                {name.length>0 ?` Welcome, ${name} `: null}
                </Link>
                

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/">
                Create
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/show">
                Show
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/complete">
                Complete Tasks
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/delete">
                Delete Data
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <form className="form-inline my-2 my-lg-0">
                    <button className="btn btn-outline-primary my-2 mr-sm-0" type="submit" onClick={e => onLogout(e)}>Logout</button>
                    </form>
    </nav>

                
        </div>
    )
}




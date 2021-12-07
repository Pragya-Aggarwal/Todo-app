import React from 'react'
import CreateTodo from '../components/CreateTodo/CreateTodo';
import DeleteData from '../components/Delete/DeleteData';
import Navbar from '../components/Navbar/Navbar'
import ShowTodo from '../components/ShowTodo/ShowTodo';
import EditTodo from '../components/EditTodo/EditTodo';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import PageNotFound from '../components/PageNotFound/PageNotFound';
import Login from '../components/Login/Login';
import Completed from '../components/Completed/Completed';
import Undo from '../Undo/undo';


function Routes(props) {
    return (
        <Router>
        <Navbar/>
          <Switch>
            <Redirect exact path="/" to="/create" />
            <Route path="/login" component={Login} />
            <Route path="/create" component={CreateTodo} />
            <Route path="/show" component={ShowTodo} />
            <Route path="/edit/:id" component={EditTodo} />
            <Route path="/complete" component={Completed} />
            <Route path="/delete" component={DeleteData} />
            <Route path="/undo" component={Undo} />
            <Route component={PageNotFound} />
          </Switch>
        </Router>
    )
}

export default Routes;



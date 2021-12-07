import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export default class ParentComponent extends Component {
    constructor( props){
        localStorage.setItem("name" , "pragya");
        super();
        this.state = {
            name: "this is from parent component",
        }
    }
    changeName = (name) => {
        this.setState({
            name
        });
    }
    render() {
        return (
            <div>
                <ChildComponent name={this.state.name} dataFunction = {this.changeName} />
            </div>
        )
    }
}

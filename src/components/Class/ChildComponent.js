import React, { useState } from 'react'

function ChildComponent(props) {
    let data= localStorage.getItem("name");
    const [name, setName] = useState("")
    return (
        <div>
            <h1> {props.name}</h1>
            <h2>{data}</h2>
            <input type="text" name="name" value={name} onChange= {(e) => {setName(e.target.value)}} />
           <button onClick={() => {props.dataFunction(name)}}>please Click</button>
        </div>
    )
}

export default ChildComponent

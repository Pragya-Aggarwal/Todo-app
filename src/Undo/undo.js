import React from 'react';
import useUndo from 'use-undo';

let sampleData = [
    {
        "taskName": "develop ",
        "description": "app",
        "date": "2021-12-09",
        "time": "18:14",
        "id": 1
      },
      {
        "taskName": "dev ",
        "description": "todo app",
        "date": "2021-12-01",
        "time": "16:14",
        "id": 2
      }, {
        "taskName": "develop ",
        "description": "todo",
        "date": "2021-12-19",
        "time": "18:14",
        "id": 4
      }
];

let newTask = 
    {
        "taskName": "new Task ",
        "description": "todo app",
        "date": "2021-12-09",
        "time": "18:14",
        "id": null,
      }


const Undo = () => {
  const [
    list,
    {
      set: setTask,
    //   reset: resetCount,
      undo: undoCount,
    //   redo: redoCount,
      canUndo,
    //   canRedo,
    },
  ] = useUndo(sampleData);
  
  const { present: presentList } = list;
  console.log("presentCount", presentList);

const addNewTask = () => {
    let data = JSON.parse(JSON.stringify(presentList));
    let id =Math.floor( Math.random()*100);
    newTask.id = id;
    newTask.taskName = "cooking";
    newTask.description = "dinner";
    newTask.date = "2021-12-10";
    newTask.time = "12:10";
    data.push(newTask);
    setTask(data);
    console.log("list",list);
}




  return (
    <div>
      {/* <p>You clicked {presentCount} times</p> */}
       <button key="increment" onClick={addNewTask}>
        +
      </button>
      {/* <button key="decrement" onClick={() => setCount(presentCount - 1)}>
        -
      </button> */}
      <button key="undo" onClick={undoCount} disabled={!canUndo}>
        undo
      </button>
      {/* <button key="redo" onClick={redoCount} disabled={!canRedo}>
        redo
      </button> */}
      {/* <button key="reset" onClick={() => resetCount(0)}>
        reset to 0
      </button>  */}
      <div>
          {presentList.map((item)=> (
              <div key={item.id}>
                  <h3>{item.id}. {item.taskName} </h3>
              </div>
          ))}
      </div>
    </div>
  );
};

export default Undo;
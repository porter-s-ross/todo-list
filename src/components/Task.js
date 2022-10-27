import React, {useState} from "react";
import './Task.css'

const Task = (props) => {
        
    return (
        <div className="task">
            <input type="checkbox" onChange={props.onCheck} checked={props.task.completed}/>
            <p className={props.task.completed ? "checked" : ""}>{props.task.name}</p>
            <div className="input-group-append">
                <button onClick={props.onDelete} className="btn btn-danger">Delete</button>
            </div>
        </div>
    )
}

export default Task;

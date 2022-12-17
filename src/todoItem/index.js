import React from "react";
import './todoItem.css'

function TodoItem(props){
    let text = props.text;
    let completed = props.completed;
    //console.log('COMPLETED', props) 
    return (
        <li className="TodoItem">
          <span 
            className={`Icon Icon-check ${completed && 'Icon-check--active'}`}
            onClick={props.onComplete}
          >
            √
          </span>
          <p className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`}>
            {text}
          </p>
          <span 
            className="Icon Icon-delete"
            onClick={props.onDelete}
            >
            X
          </span>
        </li>
      );
}

export {
    TodoItem,
}
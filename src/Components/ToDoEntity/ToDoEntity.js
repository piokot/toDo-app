import React from "react";

import "./ToDoEntity.scss";

export const ToDoEntity = ({id, text, completed, toDoList, setToDoList})=>
{

    const handleDelete = (event)=>
    {
        setToDoList(prev=>(
            prev.filter(toDo => toDo.id !== id)
        ));
    }

    const handleComplete = (event)=>
    {
        setToDoList(prev => (
            prev.map((item)=> {
                if(item.id === id)
                {
                    return {...item, completed : !item.completed}
                }
                else
                {
                    return {...item}
                }
            })
        ));
    }

    const itemCompletedStyleText =
    {
        textDecoration: "line-through",
    }

    const itemNotCompletedStyleText =
    {
        textDecoration: "none",
    }

    const itemCompletedStyleBg =
    {
        backgroundColor: '#B8B8B8'
    }

    const itemNotCompletedStyleBg =
    {
        backgroundColor: '#f7fffe'
    }

    return(
        <li className="ToDoEntity__container" style={completed ? itemCompletedStyleBg : itemNotCompletedStyleBg}>
            <p style={completed ? itemCompletedStyleText : itemNotCompletedStyleText}>{text}</p>
            <div>
                <button 
                    className="ToDoEntity__container_button-complete"
                    onClick={(event)=>handleComplete(event)}
                >
                    <i className="fas fa-check" />
                </button>
                <button 
                    onClick={(event)=>handleDelete(event)}
                    className="ToDoEntity__container_button-delete">
                    <i className="fas fa-trash" />
                </button>
            </div>
        </li>
    )
}
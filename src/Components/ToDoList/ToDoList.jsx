import React from "react";
import { ToDoEntity } from "../ToDoEntity/ToDoEntity";

import "./ToDoList.scss";

export const ToDoList = ({toDoList, setToDoList, filteredList}) =>
{
    return(
        <div className="ToDoList__container">
            <ul className="ToDoList__container_ul">
                {
                    filteredList.map(toDo=>{
                        return <ToDoEntity 
                                key={toDo.id} {...toDo} 
                                toDoList={toDoList}
                                setToDoList={setToDoList}
                            />
                    })
                }
            </ul>
        </div>
    )
}
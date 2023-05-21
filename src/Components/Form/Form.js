import React from "react";
import {v4 as uuid} from 'uuid';

import "./Form.scss";

export const Form = ({inputText, setInputText, toDoList, setToDoList, setFilter, filteredList}) =>
{

    const handleInputText = (event)=>
    {
        setInputText(event.target.value);
    }

    const handleSubmit = (event)=>
    {
        event.preventDefault();
        setToDoList([...toDoList, {
            id: uuid(),
            text: inputText, 
            completed: false
        }]);
        setInputText('');
    }

    const handleFilter = (event)=>
    {
        setFilter(event.target.value);
    }

    return(
        <div className="Form__container">
            <form className="Form__container_form" onSubmit={(event)=>handleSubmit(event)}>
                <input type="text" name="toDoItem"
                    value={inputText} 
                    onChange={(event)=>handleInputText(event)}/>
                <button>
                    <i className="fas fa-plus-square" />
                </button>

                <select name="selectToDo" 
                    className="Form__container_select"
                    onChange={(event)=>handleFilter(event)}
                >
                    <option value="all" className="Form__option">All</option>
                    <option value="completed" className="Form__option">Completed</option>
                    <option value="uncompleted" className="Form__option">Uncompleted</option>
                </select>
            </form>
        </div>
    )
}
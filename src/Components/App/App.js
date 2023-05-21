import React, { useState, useEffect } from "react";

import { Form } from "../Form/Form";
import { ToDoList } from "../ToDoList/ToDoList";

import "./App.scss";

export const App = props =>
{

  
  const [inputText, setInputText] = useState('');
  const [toDoList, setToDoList] = useState([]);
  const [filter, setFilter] = useState('all');
  const [filteredList, setFilteredList] = useState([]);
  
    useEffect(()=>
    {
      
      const loadLocalStorage = () =>
      {
        if(localStorage.getItem('toDoList')=== null || localStorage.getItem('toDoList') === undefined)
        {
          const list = [];
          localStorage.setItem('toDoList', JSON.stringify(list));
        }
        else
        {
          const toDoItemsLs = JSON.parse(localStorage.getItem('toDoList'));
          setToDoList(toDoItemsLs);
        }
      } 

      loadLocalStorage();
    }, []);

    useEffect(()=>
    {
      const handleFilter = ()=>
      {
        switch(filter)
        {
          case 'completed':
            setFilteredList(toDoList.filter(toDo => toDo.completed === true));
            break;
            case 'uncompleted':
            setFilteredList(toDoList.filter(toDo=> toDo.completed === false));
            break;
            default: 
            setFilteredList(toDoList);
            break;
          }
        }

        const saveLocalStorage = ()=>
        {
            localStorage.setItem('toDoList', JSON.stringify(toDoList));
        }

      handleFilter();
      saveLocalStorage();

    }, [toDoList, filter]);


    
  return(
    <div className="App_container">
      <h1>To do list</h1>
      <Form 
        setInputText={setInputText} 
        inputText={inputText}
        toDoList={toDoList}
        setToDoList={setToDoList}
        setFilter={setFilter}
        filteredList={filteredList}
      />
      <ToDoList 
        toDoList={toDoList}
        setToDoList={setToDoList}
        filteredList={filteredList}
      />
    </div>
  )
}
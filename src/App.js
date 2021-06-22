import React from "react";
import { useSelector } from "react-redux";

import Input from "./components/input";
import TodoItem from "./components/TodoItem";
import { selectTodoList } from "./features/todoSlice";
import "./App.css";

function App() {
  const todoList = useSelector(selectTodoList);

  return (
    <div className="app">
      <div className="app__container">
        <div className="app__todoContainer">
          {todoList.map((todo) => (
            <div key={todo.id}>
              <TodoItem name={todo.item} id={todo.id} done={todo.done} />
            </div>
          ))}
        </div>
        <Input />
      </div>
    </div>
  );
}

export default App;

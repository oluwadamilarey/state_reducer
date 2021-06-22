import React from "react";
import "./App.css";

import Input from "./components/input";
import TodoItem from "./components/TodoItem";

const todoList = [
  {
    item: "todo",
    done: false,
    id: 7849494947,
  },
  {
    item: "todo2",
    done: false,
    id: 7849494949,
  },
];

function App() {
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
      </div>
      <Input />
    </div>
  );
}

export default App;

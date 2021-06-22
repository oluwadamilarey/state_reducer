import { Checkbox } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";

import "./TodoItem.css";
import { setCheck } from "../features/todoSlice";

const TodoItem = ({ name, done, id }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setCheck(id));
    console.log(name, id, done);
  };

  return (
    <div className="todoItem">
      <Checkbox
        checked={true}
        color="primary"
        onChange={handleClick}
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
      <p className={done && "todoItem--done"}>{name}</p>
    </div>
  );
};

export default TodoItem;

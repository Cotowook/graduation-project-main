import React, { useRef, useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import "./Todos.css";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";
import Calendar from "react-calendar";
import moment from "moment";
import "react-calendar/dist/Calendar.css";

const Todos = () => {
  const no = useRef(1);

  const [todos, setTodos] = useState([]);

  const onAdd = (text) => {
    setTodos([
      ...todos,
      {
        id: no.current++,
        text: text,
        done: false,
      },
    ]);
  };
  const onDel = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const onToggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              done: !todo.done,
            }
          : todo
      )
    );
  };

  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Link to="/">
        <div>
          <img
            className="bannerLogo"
            src={logo}
            width="50px"
            height="50px"
            alt="logo"
          />
        </div>
      </Link>
      {/* <div className="calendar-parent">
        월간 운동 기록
        <div className="calendar">
          <Calendar onChange={onChange} value={value} />
        </div>
      </div> */}

      <div className="todo_leftSide">
        <span className="tab">월간 운동 횟수</span>
        <span className="tab"> 체지방률 변화 </span>
        <span className="tab"> 월간 상태 </span>
        <div className="Todos">
          <h1>TODO LIST</h1>
          <TodoInput onAdd={onAdd} />
          <TodoList todos={todos} onDel={onDel} onToggle={onToggle} />
        </div>
      </div>
    </div>
  );
};

export default Todos;

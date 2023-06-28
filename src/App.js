import React, { useReducer } from "react";
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { TodoContext } from "./Context/TodoContext";
import todoReducer from "./Context/reducer";
import TodoForm from "./Components/TodoForm";
import Todos from "./Components/Todos";
import logo from "./logo.svg";

const App = () => {
  const [todos, dispatch] = useReducer(todoReducer, []);

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      <center>
        <img src={logo} height={245} className="" />
      </center>
      <Container fluid>
        <Todos />
        <TodoForm />
      </Container>
    </TodoContext.Provider>
  );
};

export default App;

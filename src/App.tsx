import React from 'react';
import { AddTodo } from "./AddTodo";
import { TodoList } from "./TodoList";

function App() {
  return (
    <React.Fragment>
        <AddTodo />
        <TodoList />
    </React.Fragment>
  );
}

export default App;

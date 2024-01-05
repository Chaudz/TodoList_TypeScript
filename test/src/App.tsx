import "./App.css";
import AddTodoForm from "./add_form";
import { useState } from "react";
import TodoList from "./list_todo";
import { TodoModel } from "./model";

const initState: TodoModel[] = [
  {
    id: "acbc",
    title: "Todo 1",
    completed: false,
  },
  {
    id: "fsadf",
    title: "Todo 2",
    completed: false,
  },
  {
    id: "fsdf",
    title: "Todo 3",
    completed: false,
  },
];

function App() {
  const [todos, setTodos] = useState<TodoModel[]>(initState);

  const handleAddTodo = (todo: TodoModel) => {
    const newTodos = [...todos, todo];
    setTodos(newTodos);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        height: "500px",
        width: "500px",
        backgroundColor: "white",
        flexDirection: "column",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <AddTodoForm onHandleAddTodo={handleAddTodo} />
      <div
        style={{
          height: 20,
        }}
      ></div>
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;

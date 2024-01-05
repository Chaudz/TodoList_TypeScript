import { useState } from "react";
import { TodoModel } from "./model";

type Props = {
  todo: TodoModel;
  todos: TodoModel[];
  setTodos: React.Dispatch<React.SetStateAction<TodoModel[]>>;
};

const Todo: React.FC<Props> = ({ todo, setTodos, todos }) => {
  const [edit, setEdit] = useState<boolean>(true);
  const [editTodo, setEditTodo] = useState<string>(todo.title);
  console.log(edit);

  const handleDeleteTodo = (id: string) => {
    const newTodos = todos.filter((todo) => todo.id != id);
    setTodos([...newTodos]);
  };

  const handleDone = (id: string) => {
    const newTodos = todos.map((todo) =>
      todo.id == id ? { ...todo, title: editTodo } : todo
    );
    setTodos([...newTodos]);
    setEdit(true);
  };

  return (
    <div
      style={{
        marginTop: 10,
        width: 400,
        height: 50,
        backgroundColor: "#ccc",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 5,
        borderRadius: 5,
      }}
    >
      <input
        value={editTodo}
        disabled={edit}
        style={{
          border: "none",
        }}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setEditTodo(e.target.value);
        }}
      />
      <div
        style={{
          display: "flex",
        }}
      >
        <button
          type="button"
          style={{
            padding: 10,
            fontSize: 15,
            backgroundColor: "red",
            borderRadius: 5,
            cursor: "pointer",
            color: "white",
          }}
          onClick={() => handleDeleteTodo(todo.id)}
        >
          Delete
        </button>
        <div
          style={{
            width: 10,
          }}
        ></div>
        <button
          style={{
            padding: 10,
            fontSize: 15,
            backgroundColor: "green",
            borderRadius: 5,
            color: "white",
            cursor: "pointer",
          }}
          onClick={() => {
            setEdit(false);
          }}
        >
          Edit
        </button>
        <div
          style={{
            width: "10px",
          }}
        ></div>
        <button
          style={{
            padding: 10,
            fontSize: 15,
            backgroundColor: "green",
            borderRadius: 5,
            color: "white",
            cursor: "pointer",
          }}
          onClick={handleDone}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default Todo;

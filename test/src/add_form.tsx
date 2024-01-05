import React, { useRef, useState } from "react";
import { TodoModel } from "./model";

type Props = {
  onHandleAddTodo: (todo: TodoModel) => void;
};

const AddTodoForm: React.FC<Props> = ({ onHandleAddTodo }) => {
  const [title, setTitle] = useState<string>("");

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <form
        action=""
        style={{
          width: 400,
          height: 40,
        }}
        onSubmit={(e) => {
          e.preventDefault();
          const newId = Date.now().toString();
          const Createdtodo: TodoModel = {
            id: newId,
            title: title,
            completed: false,
          };
          onHandleAddTodo(Createdtodo);
          setTitle("");
          inputRef.current?.onblur;
        }}
      >
        <input
          type="text"
          style={{
            width: "100%",
            height: "100%",
            fontSize: "20px",
          }}
          placeholder="enter new value..."
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setTitle(e.target.value);
          }}
          ref={inputRef}
          value={title}
        />
      </form>
    </div>
  );
};

export default AddTodoForm;

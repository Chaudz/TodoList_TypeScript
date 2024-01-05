import { TodoModel } from "./model";
import Todo from "./todo";

type Props = {
  todos: TodoModel[];
  setTodos: React.Dispatch<React.SetStateAction<TodoModel[]>>;
};

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div
      style={{
        overflow: "auto",
      }}
    >
      {todos.map((todo, index) => (
        <Todo key={index} todo={todo} setTodos={setTodos} todos={todos} />
      ))}
    </div>
  );
};

export default TodoList;

import MainForm from "./MainForm";
import "./styles.css";
import { TodoContextValue } from "./TodoContext";
import TodoList from "./TodoList";

export default function App() {
  const [value] = TodoContextValue();
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <MainForm />
      {value.length !== 0 &&
        value.map((item) => {
          return <TodoList key={item.id} item={item} />;
        })}
    </div>
  );
}

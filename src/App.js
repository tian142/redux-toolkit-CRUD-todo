import "./App.css"
import { CreateTodo } from "./features/todo/CreateTodo"
import { TodoList } from "./features/todo/TodoList"

function App() {
  return (
    <div className="App">
      <CreateTodo />
      <TodoList />
    </div>
  )
}

export default App

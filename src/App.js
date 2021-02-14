import "./App.css"
import { CreateTodo } from "./features/todo/CreateTodo"
import { TodoList } from "./features/todo/TodoList"
import { SingleTodo } from "./features/todo/SingleTodo"
import { EditTodo } from "./features/todo/EditTodo"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom"
import { Navbar } from "./Navbar"

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <>
                <CreateTodo />
                <TodoList />
              </>
            )}
          />
          <Route exact path="/todo/:todoId" component={SingleTodo} />
          <Route exact path="/edit/:todoId" component={EditTodo} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  )
}

export default App

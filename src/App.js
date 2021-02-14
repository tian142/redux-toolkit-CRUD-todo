import "./App.css"
import { CreateTodo } from "./features/todo/CreateTodo"
import { TodoList } from "./features/todo/TodoList"
import { SingleTodo } from "./features/todo/SingleTodo"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
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
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  )
}

export default App

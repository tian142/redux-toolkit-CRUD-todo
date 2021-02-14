import React from "react"

import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"

import { deleteTodo } from "./todoSlice"

export const TodoList = () => {
  const todos = useSelector((state) => state.todo)

  const dispatch = useDispatch()

  const mapTodo = todos.map((todo, index) => (
    <div key={todo.id}>
      <span>{todo.todo}</span>
      <Link to={`/todo/${todo.id}`}>Details</Link>
      <button onClick={() => dispatch(deleteTodo(index))}>Delete</button>
    </div>
  ))

  return <div>{mapTodo}</div>
}

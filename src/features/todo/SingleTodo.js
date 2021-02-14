import React from "react"

import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

export const SingleTodo = ({ match }) => {
  const { todoId } = match.params

  const foundTodo = useSelector((state) =>
    state.todo.find((todo) => todo.id === todoId)
  )

  return (
    <div>
      <h3>{foundTodo.todo}</h3>
      <Link>Edit</Link>
    </div>
  )
}

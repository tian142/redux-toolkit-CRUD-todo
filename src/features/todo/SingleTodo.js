import React from "react"

import { useSelector } from "react-redux"

export const SingleTodo = ({ match }) => {
  const { todoId } = match.params

  const foundTodo = useSelector((state) =>
    state.todo.find((todo) => todo.id === todoId)
  )

  return <div>{foundTodo.todo}</div>
}

import React, { useState } from "react"

import { useDispatch } from "react-redux"

import { updateTodo } from "./todoSlice"

import { useHistory } from "react-router-dom"

export const EditTodo = ({ match }) => {
  const { todoId } = match.params

  const [input, setInput] = useState("")

  const onInputChange = (e) => setInput(e.target.value)

  const dispatch = useDispatch()

  const history = useHistory()

  const onEditSubmit = () => {
    dispatch(updateTodo({ id: todoId, todo: input }))
    history.push(`/todo/${todoId}`)
  }

  return (
    <div>
      <h1>Edit Todo</h1>
      <input value={input} onChange={onInputChange} />
      <button onClick={onEditSubmit}>Save Edit</button>
    </div>
  )
}

import React, { useState } from "react"
import { useDispatch } from "react-redux"

import { addTodo } from "./todoSlice"

export const CreateTodo = () => {
  const [todo, setTodo] = useState("")

  const dispatch = useDispatch()

  const onInputChange = (e) => setTodo(e.target.value)

  const onInputSubmit = () => {
    dispatch(addTodo(todo))
    setTodo("")
  }

  return (
    <div>
      <div>
        <span>
          <input value={todo} onChange={onInputChange} />
        </span>
        <button onClick={onInputSubmit}>Add Todo</button>
        <hr />
      </div>
    </div>
  )
}

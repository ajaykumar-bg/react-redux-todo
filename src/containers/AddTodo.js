import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

const AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}>
        <div className="input-field inline">
          <input type="text" ref={node => (input = node)} />
          <button className="waves-effect waves-light btn" type="submit">Add Todo</button>
        </div>
      </form>
    </div>
  )
}

export default connect()(AddTodo)
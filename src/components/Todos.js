import React from 'react'

function Todos({todos, deleteTodo}) {
    const todosList = todos.length > 0 ? 
    (
        todos.map(todo => {
            return (
                <div className="collection-item" key={todo.id}>
                    <span onClick={() => {deleteTodo(todo.id)}}>{todo.content}</span>
                </div>
            )
        })
    ) : 
    (<p className="center">You have no todos left</p>);
  return (
    <div className="todos collection">
    {
        todosList
    }
    </div>
  )
}

export default Todos

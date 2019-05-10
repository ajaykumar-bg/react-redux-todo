import React, { Component } from 'react'
import './App.css';

import Todos from './components/Todos'
import AddTodo from './components/AddTodo'

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      todos: [
        {id: 1, content: 'Learn React'},
        {id: 2, content: 'Learn Redux'},
        {id: 3, content: 'Connect react with redux'}
      ]
    }
  }
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return (todo.id !== id)
    })
    this.setState({
      todos: todos
    })
  }

  addTodo = (todo) => {
    todo.id= Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos: todos
    })
  }
  render() {
    return (
      <div className="todo-app container">
      <h1 className="center blue-text">Todo's</h1>
      <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}></Todos>
      <AddTodo addTodo={this.addTodo}/>
      </div>
    )
  }
}

export default App
import React from 'react'
import Footer from './components/Footer'
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'

const App = () => (
  <div className="container">
    <h1 className="center blue-text">Todo App</h1>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App
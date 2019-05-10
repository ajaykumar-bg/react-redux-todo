import React, { Component } from 'react'

export class AddTodo extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         content: ''
      }
    }

    handleChange = (event) => {
        this.setState({
            content: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            content: ''
        })
    }
    
  render() {
    return (
      <div>
          <form onSubmit={this.handleSubmit}>
              <label>Add more todo</label>
              <input type="text" value={this.state.content} onChange={this.handleChange}></input>
          </form>
        
      </div>
    )
  }
}

export default AddTodo

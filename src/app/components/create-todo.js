import _ from 'lodash';
import React from 'react'
import {render} from 'react-dom'

export class CreateTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state =  {
      error: null
    }
  };

  render_errors() {
    return (
      <div>
        <p style={{color: "red"}}>{this.state.error}</p>
      </div>

    );
  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleClick.bind(this)}>
          <input type="text" ref="todoInput" />
          <button onClick={this.handleClick.bind(this)}>Create</button>
        </form>
        {this.render_errors()}
      </div>
    );
  }

  handleClick(e) {
    e.preventDefault();
    const task =  this.refs.todoInput.value;
    if(this.validateInputTodo(task)) {
      this.setState({
        error: this.validateInputTodo(task)
      })
      return ;
    }

    this.props.createTask(task);
    this.refs.todoInput.value = "";
  }

  validateInputTodo(task) {
    if (!task) {
      return "Task field can be blank"
    } else if (_.find(this.props.todos, todo => todo.task === task)) {
      return "Task already exists"
    } else  {
      return null;
    }

  }
}

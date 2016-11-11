import React from 'react'
import {TodoLists} from './todolists'
import {CreateTodo} from './create-todo'
const todos = [
  {
    task: "First task",
    isCompleted: false
  },
  {
    task: "Second task",
    isCompleted: true
  }
];
export class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      todos
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <h1>To do list app</h1>
          <div><CreateTodo todos={this.state.todos} createTask={this.createTask.bind(this)}/></div>
          <div>
            <TodoLists        todos={this.state.todos}                               toggleTask={this.toggleTaskComplete.bind(this)}
              updateTask={this.updateTask.bind(this)}
              deleteTask={this.deleteTask.bind(this)} />
          </div>
        </div>
      </div>
    );
  }

  createTask(task) {
    this.state.todos.push({
      task,
      isCompleted: false
    });
    this.setState({todos: this.state.todos});
  }

  toggleTaskComplete(task) {
    const foundTask =  _.find(this.state.todos, todo => todo.task === task);
    foundTask.isCompleted =  !foundTask.isCompleted;
    this.setState({
      todos: this.state.todos
    })
  }

  updateTask(newTask, oldTask) {
    const findOldTask = _.find(this.state.todos, todo => todo.task === oldTask);
    findOldTask.task = newTask ;
    this.setState({
      todos: this.state.todos
    })
  }

  deleteTask(task){
    const foundTask = _.remove(this.state.todos, todo => todo.task ===  task);
    this.setState({
      toods: this.state.todos
    });


  }
}

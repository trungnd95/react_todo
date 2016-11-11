import _ from 'lodash';
import React from 'react'
import {render} from 'react-dom'

export class TodoListItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isEditing: false
    }
  }
  renderContent(props) {
    const {task, isCompleted} = props;
    const taskStyle = {
      color: props.isCompleted  ? 'green' : 'red',
      cursor: 'pointer'
    }

    if(this.state.isEditing)
    {
      return (
        <td>
          <form>
            <input type="text" defaultValue={props.task} ref="editedTodo"/>
          </form>
        </td>
      );
    }
    return (
      <td style={taskStyle} onClick={this.props.toggleTask.bind(this, task)}>
        {props.task}
      </td>
    );

  }
  renderAction() {
      if(this.state.isEditing)
      {
        return (
          <td>
            <button onClick={this.onSaveClick.bind(this)}>Save</button>
            <button onClick={this.onCancelClick.bind(this)}>Cancle</button>
          </td>
        )
      };

      return (
        <td>
          <button onClick={this.onEditClick.bind(this)}>Edit</button>
          <button onClick={this.props.deleteTask.bind(this, this.props.task)}>Delete</button>
        </td>
      )
  }

  render() {
    return (
      <tr>
        {this.renderContent(this.props)}
        {this.renderAction()}
      </tr>
    );
  }

  onEditClick() {
    this.setState({isEditing: true})
  }

  onCancelClick() {
    this.setState({isEditing: false})
  }

  onSaveClick(e) {
    e.preventDefault();
    const oldTask  = this.props.task;
    const newTask = this.refs.editedTodo.value
    this.props.updateTask(newTask, oldTask);
    this.setState({
      isEditing: false
    })
  }
}

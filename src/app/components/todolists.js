import _ from 'lodash';
import React from 'react'
import {render} from 'react-dom'
import {TodoListItem} from './todo-list-item'
import {TodoListHeader} from './todo-list-header'

export class TodoLists extends React.Component {
  renderTodoItem() {
    const props =  _.omit(this.props, "todos")
    return _.map(this.props.todos, (todo, i)=> <TodoListItem  key={i} {...todo} {...props} />)
  };
  render() {
    return (
      <div>
        <table>
          <TodoListHeader />
          <tbody>
            {this.renderTodoItem()}
          </tbody>
        </table>
      </div>
    );
  }
}

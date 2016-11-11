import _ from 'lodash';
import React from 'react'
import {render} from 'react-dom'

export class TodoListHeader extends React.Component {
  render() {
    return (
      <thead>
        <tr>
          <td>Task</td>
          <td>Action</td>
        </tr>
      </thead>
    );
  }
}

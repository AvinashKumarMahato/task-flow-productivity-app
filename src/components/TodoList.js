import React, { Component } from 'react';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      inputValue: '',
    };
  }

  handleInputChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  handleAddTask = () => {
    const { tasks, inputValue } = this.state;
    if (inputValue.trim() !== '') {
      this.setState({
        tasks: [...tasks, inputValue],
        inputValue: '',
      });
    }
  };

  handleDeleteTask = (index) => {
    const { tasks } = this.state;
    const updatedTasks = tasks.filter((_, i) => i !== index);
    this.setState({ tasks: updatedTasks });
  };

  render() {
    const { tasks, inputValue } = this.state;

    return (
      <div className="todo-list container">
        <div className="mb-3 input-group">
          <input
            type="text"
            className="form-control"
            value={inputValue}
            onChange={this.handleInputChange}
            placeholder="Add a task..."
          />
          <button className="btn btn-primary" onClick={this.handleAddTask}>
            Add Task
          </button>
        </div>
        <ul className="list-group">
          {tasks.map((task, index) => (
            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
              {task}
              <button className="btn btn-danger" onClick={() => this.handleDeleteTask(index)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;

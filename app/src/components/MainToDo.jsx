import React, { Component } from "react";
import ToDoTask from "./ToDoTask";
class ToDoApp extends Component {
  state = {
    newTaskValue: "",
    doneTasks: [],
    tasks: [{ id: 1, taskValue: "RANDOM TAKS" }],
  };

  onChange = (e) => {
    const inputValue = e.target.value;
    this.setState({
      newTaskValue: inputValue,
    });
  };

  addNewTask = (e) => {
    e.preventDefault();
    const AddedTask = {
      id: this.state.tasks.length + this.state.doneTasks.length + 1,
      taskValue: this.state.newTaskValue,
    };
    this.setState({
      tasks: [...this.state.tasks, AddedTask],
      newTaskValue: "",
    });
  };

  removeTask = (id) => {
    const tasks = this.state.tasks.filter((task) => task.id !== id);
    const doneTask = this.state.tasks.find((task) => task.id === id);

    this.setState({
      tasks,
      doneTasks: [...this.state.doneTasks, doneTask],
    });
  };

  render() {
    console.log(this.state.tasks);
    return (
      <div className="todo-wrapper">
        <h1 className="todo-name"> TO DO APP</h1>
        <form className="todo-form" onSubmit={this.addNewTask}>
          <input
            type="text"
            className="todo-input"
            onChange={this.onChange}
            value={this.state.newTaskValue}
          />
          <button className="todo-btn" type="submit">
            Add
          </button>
        </form>
        <div className="tasks-wrapper">
          <div className="todo-list">
            {" "}
            {this.state.tasks.map((task) => (
              <div key={task.id}>
                <ToDoTask
                  task={task.taskValue}
                  action={this.removeTask}
                  id={task.id}
                />
              </div>
            ))}{" "}
          </div>
          <div className="todo-done">
            {" "}
            {this.state.doneTasks.map((doneTask) => (
              <li key={doneTask.id}>
                {doneTask.id} {doneTask.taskValue}{" "}
              </li>
            ))}{" "}
          </div>
        </div>
      </div>
    );
  }
}
export default ToDoApp;

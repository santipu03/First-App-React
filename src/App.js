import React from "react"
import Overview from "./components/Overview"


export default class App extends React.Component{
  constructor () {
    super()
    this.state = {
      tasksArray: []
    }
  }

  onSubmitTask (e) {
    e.preventDefault()
    const value = e.currentTarget.firstElementChild.value
    this.setState(previousState => ({
      tasksArray: [...previousState.tasksArray, value],
    }))
    document.querySelector("form").reset()
  }

  onDeleteTask (name) {
    this.setState(previousState => ({
      tasksArray: previousState.tasksArray.filter(item => item !== name)
    }))
  }

  render() {
    return (
      <div className="card">
        <form onSubmit={this.onSubmitTask.bind(this)}>
          <input type={"text"}></input>
          <button type="submit">Add Task</button>
        </form>
        <Overview 
          array={this.state.tasksArray} 
          onDelete={name => this.onDeleteTask(name)}
        />
      </div>
    )
  }
}
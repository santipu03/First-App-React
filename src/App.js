import React from "react"
import Overview from "./components/Overview"


export default class App extends React.Component{
  constructor () {
    super()
    this.state = {
      tasksArray: [],
      inputValue: ''
    }
  }

  handleChange (e) {
    this.setState({inputValue: e.target.value})
  }

  onSubmitTask (e) {
    e.preventDefault()
    this.setState(previousState => ({
      tasksArray: [...previousState.tasksArray, this.state.inputValue],
      inputValue: ""
    }))
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
          <input type={"text"} value={this.state.inputValue} onChange={this.handleChange.bind(this)} ></input>
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
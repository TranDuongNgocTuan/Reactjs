import React, {Component} from 'react'

class Form extends Component {
  initialState = {
    name: '',
    job: '',
  }

  handleChange = (event) => {
    const {name, value} = event.target
  
    this.setState({
      [name]: value,
    })
  }

  submitForm = () => {
    this.props.handleSubmit(this.state)
    this.setState(this.initialState)
  }

  state = this.initialState

  render() {
    const { name, job } = this.state;
  
    return (
      <div>
        <form>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={this.handleChange} />
          <label htmlFor="job">Job</label>
          <input
            type="text"
            name="job"
            id="job"
            value={job}
            onChange={this.handleChange} />
            <input type="button" value="Submit" onClick={this.submitForm} />
        </form>
        <div>Name: {this.state.name} Job: {this.state.job}</div>
      </div>
    );
  }
}

export default Form;
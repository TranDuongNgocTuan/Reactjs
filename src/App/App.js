import React, {Component} from 'react'
// import Header from '../Components/Header'
// import Table from '../Components/Table'
// import Form from '../Components/Form'
import InputCron from '../Components/InputCron'

class App extends Component {

  state = {
    characters: [],
  }

  handleSubmit = (character) => {
    console.log(character);
    this.setState({characters: [...this.state.characters, character]})
  }

  render () {
    return (
      <>
        <InputCron />
      </>
    );
  }
}

export default App;
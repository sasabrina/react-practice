import React, { Component } from 'react';
import Form from './components/Form'
import Result from './components/Result'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      calculatedWeight: 0,
      planet: ""
    }
  }

  weightCalculate = w => {
    this.setState({
      calculatedWeight: Math.round(w)
    })
  }

  planetSelect = p => {
    this.setState({
      planet: p
    })
  }

  render() {
    let seteado = this.state.calculatedWeight !== 0 && this.state.planet.length > 1 ? true : false
    
    return (
      <div className="App">
        <Form weightCalculate={this.weightCalculate} planetSelect={this.planetSelect}/>
        {seteado === true && <Result theResult={this.state.calculatedWeight} thePlanet={this.state.planet}/>}
        {seteado === false && <div className='result'><p>Por favor complete los campos.</p></div>}
      </div>
    );
  }
}

export default App;
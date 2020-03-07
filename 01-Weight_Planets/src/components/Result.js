import React, { Component } from 'react';
import '../App.css'

class Resultado extends Component {
  render() {
    return (
      <div className='result'>
        <p>Tu peso en <span>{this.props.thePlanet}</span> es: <span>{this.props.theResult}kgs</span></p>
      </div>
    );
  }
}

export default Resultado;
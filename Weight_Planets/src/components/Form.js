import React, { Component } from 'react';

class Form extends Component {
  constructor (props){
    super(props);

    this.state = {
      earthWeight: '',
      planetsWeight: 0,
      planets: [
        {id: 1, weight: 0.0387, name: 'Mercurio'},
        {id: 2, weight: 0.9051, name: 'Venus'},
        {id: 3, weight: 0.3775, name: 'Marte'},
        {id: 4, weight: 2.5306, name: 'Jupiter'},
        {id: 5, weight: 1.0653, name: 'Saturno'},
        {id: 6, weight: 0.8877, name: 'Urano'},
        {id: 7, weight: 1.1377, name: 'Neptuno'},
        {id: 8, weight: 0.0632, name: 'Pluton'},
      ]
    }
  }

  handleInput = (e) => {
    this.setState({
      earthWeight: Number(e.target.value)
    })
  }

  handleSelect = (e) => {
    this.setState({
      planetsWeight: Number(this.getWeightPlanets(e.target.value))
    })
  }

  getWeightPlanets = (id) =>{
    let p = this.state.planets.filter((p) => p.id === Number(id))[0];
    this.props.planetSelect(p.name);
    return p.weight;
  }

  calculatingWeight= (e)=> {
    e.preventDefault();
    let earthW = Number(this.state.earthWeight);
    let planetsW = Number(this.state.planetsWeight);

    this.props.weightCalculate(Number(earthW * planetsW))
  }

  render() {
    return (
      <form>
        <h1 className='formChild'>Calcula tu peso en otro planeta</h1>
        <input type='number' defaultValue={this.state.earthWeight} onChange={this.handleInput} placeholder='Introduzca su peso' className='formChild'/>
        <select onChange={this.handleSelect} name='select' className='formChild'>
          <option selected>Seleccione un Planeta</option>
          {this.state.planets.map(p =>
            <option key={p.id} value={p.id}>{p.name}</option>
          )}
        </select>

        <button onClick={this.calculatingWeight} className='formChild'>Calcular</button>
      </form>
    );
  }
}

export default Form;
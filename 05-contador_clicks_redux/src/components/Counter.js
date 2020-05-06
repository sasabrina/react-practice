import React from 'react'
import { connect } from 'react-redux'
import { increment, decrement } from '../store'

const Counter = props => {
    // el componente una vez conectado, accede al método dispatch a través de las props
    // const inc = () => props.dispatch(increment())
    // const dec = () => props.dispatch(decrement())
    // sin embargo, vamos a acceder al método dispatch a traves de la función mapDispatchToProps y conectar directamente las acciones a las props

    const {count, increment, decrement} = props
    return(
        <div>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <h1>{count}</h1>
        </div>
    )
}

// El método connect nos permite conectar al componente con el store
// su ejecución debe recibir por primer parámetro una función, convencionalmente llamada mapStateToProps
// esta función recibe como parametro el estado y debe retornar un objeto que luego se conectará al componente por props
const mapStateToProps = state => {
    return {
        count: state
    }
}

// como segundo parametro recibe una función llamada mapDispatchToProps, que recibe como parámetro el método dispatch y retorna un objeto con acciones
const mapDispatchToProps = dispatch => {
    return({
        increment: () => dispatch(increment()),
        decrement: () => dispatch(decrement())
    })
}

// se exporta directamente el hook connect con el componente como parametro en la segunda ejecución
export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(Counter)
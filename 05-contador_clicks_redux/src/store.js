import { createStore } from 'redux'

// Nombres de acciones
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// reducer
const initialState = 0

// recibe como parámetros el estado y la acción
const counter = (state = initialState, action) => {
    switch(action.type) {
        case INCREMENT:
            return state + 1
        
        case DECREMENT:
            return state - 1
        
        default:
            return state
    }
}

// Store => almacenamiento del estado
// se crea a partir de un reducer
const store = createStore(counter)

// store.subscribe(() => {
//     console.log(store.getState())
// })

// Creadores de acciones
// declaramos como valor de la propiedad type los nombres de acciones creado inicialmente
// y las exportamos para poder acceder a ellas en los componentes de nuestra aplicación
export const increment = () => {
    return {
        type: INCREMENT
    }
}

export const decrement = () => {
    return {
        type: DECREMENT
    }
}


// Acciones
// store.dispatch(increment())

// setTimeout(() => {
//     store.dispatch(decrement())
// }, 2000)

export default store
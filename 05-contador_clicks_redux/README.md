This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

##### Apuntes
- store 
    - almacenamiento del estado (globalizado)
    - createStore() recibe como parametro un reducer
    - provee métodos que permiten suscribir, actualizar y disparar acciones:
        - getStore(): obtiene el estado actual
        - dispatch(): ejecuta las acciones
        - subscribe(): subscribe a los cambios que se realicen dentro del store
- reducer -> 
    - devuelve el estado actual
    - debe ser una función pura
    - recibe dos parámetros: (estado, acción)
- action
    - deben ser objetos planos
    - describe que voy a hacer con el estado
- dispatch -> ejecuta las acciones

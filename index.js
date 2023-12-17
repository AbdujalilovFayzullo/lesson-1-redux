const redux = require('redux');
const createStore = redux.createStore;

const CAKE_ORDERED = "CAKE_ORDERED";

function orderCake(quantity = 1) {
    return {
        type: CAKE_ORDERED,
        payload: quantity

    }
}

const initialState = {
    numOfCakes: 10,
    iceCream: 10,
    cheeseCake: 10,
    chocolateCake: 10,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CAKE_ORDERED:
            
            return{
                ...state,
                numOfCakes: state.numOfCakes + action.payload,
                iceCream: state.iceCream + action.payload,
                cheeseCake: state.cheeseCake + action.payload,
                chocolateCake: state.chocolateCake + action.payload
                
            }
    
        default:
            return state
    }
}

const store = createStore(reducer);

console.log('Initial state', store.getState());

const unsubscribe = store.subscribe(() => {
    console.log('Updated state', store.getState())
})

store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderCake())

unsubscribe()
import {createStore, combineReducers} from "redux";
import {filtersReducer} from "../reducers/filtersReducer";
import {pizzasReducer} from "../reducers/pizzasReducer"


const rootReducer = combineReducers({
    filters: filtersReducer,
    pizzas: pizzasReducer
})

//для того чтобы расширение было красивым


export const store = createStore  (rootReducer,  /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


window.store = store
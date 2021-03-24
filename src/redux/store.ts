import thunkMW from 'redux-thunk'
import { applyMiddleware, combineReducers, compose, createStore } from "redux";

let reducersList = combineReducers({
})
export type RootState = ReturnType<typeof reducersList>

const composeEnhancers =
    typeof window === 'object' &&
    // @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        // @ts-ignore
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunkMW)
);
export let store = createStore(reducersList, enhancer)


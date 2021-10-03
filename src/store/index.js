import { combineReducers, createStore} from 'redux'
import counter from './votes'

// to use redux dev tools in chrome console
import { composeWithDevTools } from 'redux-devtools-extension'


let reducers = combineReducers({counter})

const store = () => {
    return createStore(reducers, composeWithDevTools());
}

export default store();
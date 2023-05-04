import {configureStore,createStore, combineReducers} from '@reduxjs/toolkit'

import ressourcesReducer from './ressources'
import MemeReducer from './meme'

// const store = createStore(combineReducers({
//     ressources:ressourcesReducer
// }))

const store = configureStore({
    reducer: combineReducers({
        ressources:ressourcesReducer,
        meme:MemeReducer
    })
})

export default store

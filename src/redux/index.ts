import { composeWithDevTools } from '@redux-devtools/extension'
import { createWrapper } from 'next-redux-wrapper'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import rootReducer from './reducers'

const persistConfig = {
  key: 'pa-admin',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk)),
)
export const persistor = persistStore(store)

export const storeWrapper = createWrapper(() => store, { debug: false })

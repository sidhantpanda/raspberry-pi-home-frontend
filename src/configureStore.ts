import rootReducer from './reducers/rootReducer';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web and AsyncStorage for react-native

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default () => {
  const composeEnhancers =
    typeof window === 'object' &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize... 
      }) : compose;


  const enhancer = composeEnhancers(
    applyMiddleware(thunk),
    // other store enhancers if any
  );


  let store = createStore(
    persistedReducer,
    {},
    enhancer
  );

  if ((module as any).hot) {
    (module as any).hot.accept('./reducers/rootReducer', () => {
      // This fetch the new state of the above reducers.
      const nextRootReducer = require('./reducers/rootReducer').default
      store.replaceReducer(
        persistReducer(persistConfig, nextRootReducer)
      )
    })
  }



  let persistor = persistStore(store)
  return { store, persistor }
}
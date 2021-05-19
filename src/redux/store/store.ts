import { createStore, applyMiddleware } from 'redux';
import {useDispatch} from 'react-redux'
import thunkMiddleware from 'redux-thunk';
import {rootReducer} from '../rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension';


export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

export type AppState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
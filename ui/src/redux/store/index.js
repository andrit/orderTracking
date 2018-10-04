import { createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer from '../reducers';
import mySaga from './sagas';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(sagaMiddleware) 
    )
);

//run method referred to as a task.  how takeLatest has access to dispatch actions
sagaMiddleware.run(mySaga);





// import { createStore, applyMiddleware } from "redux";
// import reducer from "./reducers";
// import thunk from "redux-thunk";

// const store = createStore(
//   reducer,
//   /* preloadedState, */
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
//   applyMiddleware(thunk)
// );

// export default store;

import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancer(applyMiddleware(thunk)));

export default store;

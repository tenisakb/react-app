import * as React from "react";
import * as ReactDOM from "react-dom";
import { ConnectedRouter, routerMiddleware } from "react-router-redux";
import { Route, Switch } from "react-router";
import { createStore, applyMiddleware, compose } from "redux";
import { createEpicMiddleware } from "redux-observable";
import { Provider } from "react-redux";

import AppList from "./components/AppList";
import Root from "./components/Root";

import reducers, { RootState } from "./reducers";
import epics from "./epics";
import createHistory from "history/createBrowserHistory";

const history = createHistory();

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function;
  }
}

const composeEnhancers =
  (window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

function configureStore(initialState?: RootState) {
  const middlewares = [createEpicMiddleware(epics), routerMiddleware(history)];
  const enhancer = composeEnhancers(applyMiddleware(...middlewares));
  return createStore(reducers, initialState!, enhancer);
}

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Root>
        <Switch>
          <Route exact path="/" component={AppList} />
          <Route path="/add" component={AppList} />
          <Route path="/edit" component={AppList} />
        </Switch>
      </Root>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);

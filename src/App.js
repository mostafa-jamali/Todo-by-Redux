import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import store, { persistor } from './Redux/store';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import TodoArchive from './view/TodoArchive/TodoArchive';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <Router>
            <div>
              <Switch>
                <Route path="/edit/:todoId">
                  <TodoArchive />
                </Route>
                <Route path="/">
                  <TodoArchive />
                </Route>
              </Switch>
            </div>
          </Router>
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;

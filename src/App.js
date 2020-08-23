import React from 'react';
import { Provider } from 'react-redux';
import {store} from './Redux/store';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import TodoArchive from './view/TodoArchive/TodoArchive';
import AddTodo from './view/AddTodo/AddTodo';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <div>
            <Switch>
            <Route path="/edit/:todoId">
                <AddTodo />
              </Route>
              <Route exact path="/add">
                <AddTodo />
              </Route>
              <Route path="/">
                <TodoArchive />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </Provider>
  );
}

export default App;

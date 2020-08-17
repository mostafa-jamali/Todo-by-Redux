import React from 'react';
import { Provider } from 'react-redux';
import {store} from './Redux/store';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Todo from './Component/todo/Todo';
import AddTodo from './view/AddTodo/AddTodo';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <div>
            <Switch>
              <Route path="/add">
                <AddTodo />
              </Route>
              <Route path="/">
                <Todo />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </Provider>
  );
}

export default App;

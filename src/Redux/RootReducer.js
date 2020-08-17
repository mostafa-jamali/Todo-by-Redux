import {combineReducers} from 'redux';
import todoReducer from './Todo/Todo.reducer';

export default combineReducers({
    todoList: todoReducer,
})
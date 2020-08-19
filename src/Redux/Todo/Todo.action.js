import types from './Todo.types';


export const addTodo = (todo) => {
    return {
        type: types.ADD_TODO,
        payload: todo
    }
}
export const deleteTodo = (id) => {
    return {
        type: types.DELETE_TODO,
        payload: id
    }
}

import types from './Todo.types';


export const addTodo = (todo) => {
    return {
        type: types.ADD_TODO,
        payload: todo
    }
}

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
export const editTodo = (todo) => {
    return {
        type: types.EDIT_TODO,
        payload: todo
    }
}
export const changeCheckItemStatus = (todoId, itemId) => {
    return {
        type: types.CHANGE_ITEM_STATUS,
        payload: {todoId, itemId}
    }
}
const initialState = {
    todo_List: [
        {
            id: 1,
            title: "title1",
            text: "text1",
            checkList: [
                { id: 1, text: "text1", status: false },
                { id: 2, text: "text2", status: false },
            ]
        },
        {
            id: 2,
            title: "title2",
            text: "text2",
            checkList: [
                { id: 1, text: "text1", status: false },
                { id: 2, text: "text2", status: false },
            ]
        },
        {
            id: 3,
            title: "title3",
            text: "text3",
            checkList: [
                { id: 1, text: "text1", status: false },
                { id: 2, text: "text2", status: false },
            ]
        }
    ]
}
const todoReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case ("ADD_TODO"):
            return {
                ...state,
                todo_List: [...state.todo_List, payload]
            }
        case ("DELETE_TODO"):
            return {
                ...state,
                todo_List: state.todo_List.filter(item => item.id !== payload)
            }
        case ("EDIT_TODO"):
            return {
                ...state,
                todo_List: state.todo_List.map(item => item.id == payload.id ? payload: item)
            }
        case ("CHANGE_ITEM_STATUS"):
            return {
                ...state,
                todo_List: state.todo_List.map(item => item.id == payload.todoId ?
                    {
                        ...item, checkList: item.checkList.map(check => check.id == payload.itemId ?
                            { ...check, status: !check.status } : check)
                    } : item)
            }
        default:
            return state;
    }
}
export default todoReducer;
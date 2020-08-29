const initialState = {
    todo_List: [
        {
            id: 1,
            title: "University",
            text: "Study",
            checkList: [
                { id: 1, text: "mathematics", status: false },
                { id: 2, text: "static", status: true },
            ]
        },
        {
            id: 2,
            title: "Home",
            text: "Routine works",
            checkList: [
                { id: 1, text: "buy", status: false },
                { id: 2, text: "rest", status: false },
            ]
        },
        {
            id: 3,
            title: "Work",
            text: "Meetting",
            checkList: [
                { id: 1, text: "salary and benefits", status: false },
                { id: 2, text: "vacations", status: false },
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
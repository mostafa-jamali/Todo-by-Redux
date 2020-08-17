const initialState = {
    todo_List: [
        {
            id: 1,
            title: "title1",
            checkList: [
                { id: 1, text: "text1", status: false },
                { id: 2, text: "text2", status: false },
            ]
        },
        {
            id: 2,
            title: "title2",
            checkList: [
                { id: 1, text: "text1", status: false },
                { id: 2, text: "text2", status: true },
            ]
        },
        {
            id: 3,
            title: "title3",
            checkList: [
                { id: 1, text: "text1", status: false },
                { id: 2, text: "text2", status: true },
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
        default:
            return state;
    }
}
export default todoReducer;
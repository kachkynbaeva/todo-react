const initialState = {

    todos: []

}
export const todoReducer = (state = initialState, action ) => {
    switch (action.type) {
        case 'GET_TODOS':
            return {...state, todos: action.payload}
        case 'ADD_TODO':
            return {...state,todos: [...state.todos,action.payload]}
        case 'DELETE_TODO':
            return {...state,todos: state.todos.filter((todo) =>todo.id !== action.payload)}
        default:
            return state
        case 'EDIT_TODO':
            return {...state,editTodo:action.payload}
        case 'SAVE_TODO':
            return state

    }
};

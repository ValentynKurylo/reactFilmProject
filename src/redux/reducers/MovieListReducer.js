const initialState = {
    UserWatchLists: [],
    CurrentList: [],
    CurrentListID: null
}

export const MovieListReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER_WATCH_LISTS':
            return {
                ...state,
                UserWatchLists: action.payload
            }
        case 'SET_CURRENT_LISTS':
            return {
                ...state,
                CurrentList: action.payload
            }
        case 'SET_CURRENT_LISTS_ID':
            return {
                ...state,
                CurrentListID: action.payload
            }


        default:
            return state
    }
}
const initialState = {
    token: '',
    username: '',
    userID: null,
    comments: []
}

export const TokenReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.payload,
            }
        case 'SET_USERNAME':
            return {
                ...state,
                username: action.payload
            }
        case 'SET_USERID':
            return {
                ...state,
                userID: action.payload
            }
        case 'SET_COMMENTS':
            return {
                ...state,
                comments: action.payload
            }

        default:
            return state
    }
}
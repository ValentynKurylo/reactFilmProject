const initialState = {
    AllMovies: [],
    page: 1,
    inform: {},
    genre: [],
    genreMovie: []
}

export const getMoviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_MOVIE':
            return {
                ...state,
                AllMovies: action.payload,
                isLoading: false
            }
        case 'NEXT':
            return {
                ...state,
                page: state.page += 1
            }
        case 'BEFORE':
            return {
                ...state,
                page: state.page -= 1
            }
        case 'INFORM':
            return {
                ...state,
                inform: action.payload
            }
        case 'SET_GENRE':
            return {
                ...state,
                genre: action.payload
            }
        default:
            return state
    }
}


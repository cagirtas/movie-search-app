import { SEARCH_MOVIES, ADD_INPUT, GET_MOVIE } from './Types'

const initialState = {
    movies: [],
    input: '',
    movie: []
}

export default function reducers(state = initialState, action) {
    switch (action.type) {
        case SEARCH_MOVIES:
            return { ...state, movies: action.payload }
        case ADD_INPUT:
            return { ...state, input: action.payload }
        case GET_MOVIE:
            return { ...state, movie: action.payload }
        default:
            return state
    };
}
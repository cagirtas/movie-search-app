import { SEARCH_MOVIES, ADD_INPUT, FETCH_MOVIE, GET_ID } from './types'

const initialState = {
    movies: [],
    input: '',
    id: '',
    movie: []
}

export default function reducers(state = initialState, action) {
    switch (action.type) {
        case SEARCH_MOVIES:
            return { ...state, movies: action.payload }
        case ADD_INPUT:
            return { ...state, input: action.payload }
        case FETCH_MOVIE:
            return { ...state, movie: action.payload }
        case GET_ID:
            return { ...state, id: action.payload }
        default:
            return state
    };
}
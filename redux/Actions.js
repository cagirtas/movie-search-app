import { SEARCH_MOVIES, ADD_INPUT, FETCH_MOVIE, GET_ID } from './types'

export const setMovieSearch = (value) => {
    return {
        type: SEARCH_MOVIES,
        payload: value
    }
}

export const setSearchInput = (value) => {
    return {
        type: ADD_INPUT,
        payload: value
    }
}

export const fetchMovieData = (value) => {
    return {
        type: FETCH_MOVIE,
        payload: value
    }
}

//side effects

const apiKey = process.env.NEXT_PUBLIC_OMDB_KEY

export const searchMovieByName = (input) => {
    return function (dispatch) {
        fetch(`https://www.omdbapi.com/?s=${input}&apikey=${apiKey}`)
            .then(res => res.json())
            .then((results) => { dispatch(setMovieSearch(results)); console.log(results) })
            .catch((error) => {
                console.log(error.message)
            })
    }
}

export const searchMovieByID = (movieId) => {
    return function (dispatch) {
        fetch(`https://www.omdbapi.com/?i=${movieId}&apikey=${apiKey}`)
            .then(res => res.json())
            .then((results) => { dispatch(fetchMovieData(results)); console.log(results) })
            .catch((error) => {
                console.log(error.message)
            })
    }
}

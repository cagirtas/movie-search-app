import { SEARCH_MOVIES, ADD_INPUT, GET_MOVIE } from './Types'

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

export const setMovieData = (value) => {
    return {
        type: GET_MOVIE,
        payload: value
    }
}

//side effects

const apiKey = process.env.NEXT_PUBLIC_OMDB_KEY

export const searchMovieByName = (param) => {
    return function (dispatch) {
        fetch(`https://www.omdbapi.com/?s=${param}&apikey=${apiKey}`)
            .then(res => res.json())
            .then((results) => { dispatch(setMovieSearch(results)); /* console.log(results) */ })
            .catch((error) => {
                console.log(error.message)
            })
    }
}

export const searchMovieByID = (param) => {
    return function (dispatch) {
        fetch(`https://www.omdbapi.com/?i=${param}&apikey=${apiKey}`)
            .then(res => res.json())
            .then((results) => { dispatch(setMovieData(results)); /* console.log(results) */ })
            .catch((error) => {
                console.log(error.message)
            })
    }
}

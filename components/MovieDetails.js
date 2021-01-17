import { useEffect, useState } from "react"

export default function MovieDetails({ movieData }) {

    const movieArray = JSON.parse(localStorage.getItem('Movies'))
    const isFavorite = movieArray.some(movie=>movie.imdbID == movieData.imdbID)
    const [buttonName, setButtonName] = useState('')

    useEffect(()=>{
        typeof window !== undefined ? localStorage.getItem('Movies') : null
        isFavorite ? setButtonName('Remove Favorite') : setButtonName('Add Favorite')
    })

    const controlFavorites = () => {
        const filteredArray = movieArray.filter(movie=>movie.imdbID !== movieData.imdbID)
        if(!isFavorite){
            localStorage.setItem('Movies', JSON.stringify([...movieArray, movieData]))
            setButtonName('Remove Favorites')
        }
        else{
            localStorage.setItem('Movies', JSON.stringify(filteredArray))
            setButtonName('Add Favorites')
        }
    }
    
    return (
        <div className='carousel'>
            <div className="movie-details">
                <div className='movie-poster'>
                    <img src={movieData.Poster} />
                </div>
                <div className='imdb-details'>
                    <img src='/imdb-icon.svg' />
                    <span>{movieData.imdbRating}</span>
                    <div>
                        <span className='genre-tag'>{movieData.Genre}</span>
                    </div>
                    <div>
                        <h1>{movieData.Title}</h1>
                        <span>{movieData.Year}</span>
                        <p>{movieData.Plot}</p>
                        <button onClick={controlFavorites}>{buttonName}</button>
                    </div >
                </div >
            </div >
        </div >
    )
}

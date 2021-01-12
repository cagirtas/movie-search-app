import { useEffect } from 'react'
import Header from '../components/Header'
import MovieList from '../components/MovieList'

export default function Favorites() {

    const storedMovies = JSON.parse(localStorage.getItem('Movies'))

    const favoriteList = storedMovies ?
        storedMovies.map((values, index) => (
            <MovieList key={index} moviesData={values} imdbId={values.imdbID} />
        )) : "No Favorites Found"

    console.log(favoriteList)

    return (
        <>
            <Header />
            <div>
                <span className='page-headline'>Home&nbsp; / Favorites</span>
            </div>
            <h1 className='results-headline'>Favorites</h1>
            <div className='movie-card-box'>{favoriteList}</div>
        </>
    )
}
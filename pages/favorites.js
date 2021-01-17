import { useEffect } from 'react'
import Header from '../components/Header'
import MovieList from '../components/MovieList'

export default function Favorites() {

    useEffect(()=>{
        typeof window !== undefined ? localStorage.getItem('Movies') : null
    })

    const storedMovies = JSON.parse(localStorage.getItem('Movies'))


    const favoriteList = storedMovies ?
        storedMovies.map((values, index) => (
            <MovieList key={index} moviesData={values} imdbId={values.imdbID} />
        )) : "No Favorites Found"

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
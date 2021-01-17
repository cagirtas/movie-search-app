import Header from '../components/Header'
import MovieList from '../components/MovieList'
import { useSelector } from 'react-redux'

export default function SearchResults() {

    const movieName = useSelector(state => state.globalStateMovies.movieSearch)
    const searchedMovie = useSelector(state => state.globalStateMovies.movies)
    const content = searchedMovie.Response === 'True'
        ? searchedMovie.Search.map((values, index) => (
            <MovieList key={index} moviesData={values} imdbId={values.imdbID} />
        ))
        : null;

    return (
        <>
            <Header />
            <div>
                <span className='page-headline'> Home&nbsp; / Search results</span>
            </div>
            <h1 className='results-headline'>Search Results For: {movieName}</h1>
            <div className='movie-card-box'>{content}</div>
        </>
    )
}
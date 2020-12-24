import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { searchMovieByID } from '../redux/Actions'
import { useRouter } from 'next/router'
import MovieDetails from '../components/MovieDetails'
import MovieCard from '../components/MovieCard'

export default function MoviePage() {

    const dispatch = useDispatch()
    const router = useRouter()
    const { imdbId } = router.query
    console.log({ imdbId })

    dispatch(searchMovieByID(imdbId))

    const getMovie = useSelector(state => state.globalStateMovies.movie)
    const content = getMovie.Response === 'True'
        ? getMovie.map((values, index) => (
            <MovieDetails key={index} movieData={value} />
        ))
        : null;

    return (
        <>
            {content}
        </>
    )
}
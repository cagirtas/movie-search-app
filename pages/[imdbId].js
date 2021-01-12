import { useDispatch, useSelector } from 'react-redux'
import { searchMovieByID } from '../redux/Actions'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Header from '../components/Header'
import MovieDetails from '../components/MovieDetails'

export default function MoviePage() {

    const dispatch = useDispatch()
    const router = useRouter()
    const { imdbId } = router.query

    useEffect(() => {
        dispatch(searchMovieByID(imdbId))
    }, [])

    const movieData = useSelector(state => state.globalStateMovies.movie)

    return (
        <>
            <Header />
            <MovieDetails movieData={movieData} />
        </>
    )
}
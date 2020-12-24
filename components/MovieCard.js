import Link from 'next/link'

export default function MovieCard({ moviesData, imdbId }) {

    return (
        <Link href={'/}>
            <div className='movie-card'>
                <span>{moviesData.Year}</span>
                <h2>{moviesData.Title}</h2>
                <img className='movie-poster' src={moviesData.Poster} />
            </div >
        </Link>
    )
}

export default function MovieDetails({ movieData }) {

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
                        <button value=''>Add to favorites</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

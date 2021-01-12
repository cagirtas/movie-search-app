import { useEffect } from "react"

export default function MovieDetails({ movieData }) {

    const storedMovies = localStorage.getItem('Movies')
    const movieArray = JSON.parse(storedMovies)

    useEffect(() => {
        if (storedMovies == null) {
            localStorage.setItem('Movies', JSON.stringify([{}]))
        }
        else storedMovies
    })


    //eger movieData.imdbId local store da var ise In Favorites butonu goster
    //eger movieData.imdbId local store da yok ise Add Favories butonu goster


    //eger movieData.imdbId local store da yok ise ekle ve In Favorites butonu goster
    //eger movieData.imdbId local store da var ise tiklandiginda sil ve Add Favories butonu goster

    //algoritmayi duzgun kuralim
    //eger Movies bos ise direk ekle 
    //eger array doluysa ve yoksa ekle 
    //degilse onlani sil


    const controlFavorites = () => {
        //problem surada yeni movie eklerken ilk satira bakiyor ve durum eger uyuyorsa calistiriyor
        //dolayisiyla hemen ustune yaziyor yenisini
        //benim sunu yapmam lazim
        //tersten dusunelim
        //problem array doluyken arastirmasi 
        //benim tam olarak ilk yapmam gereken ilk koda bir for dondurup kontrol etmem
        //eger ilk satir bos veya ilk satir movieDataya esit degilse ekle
        //ya da eger ilk satir e
        //ya da eger array doluysa ve icinde yok ise ekle degilse sil
        //degilse array dolu

        for (var i = 0; i < movieArray.length; i++) {
            if (movieArray[i].imdbID !== movieData.imdbID) {
                movieArray.splice(movieArray[i], 1)
                localStorage.setItem('Movies', JSON.stringify(movieArray))
            }
            else {
                movieArray.push(movieData)
                localStorage.setItem('Movies', JSON.stringify([...movieArray]))
            }
        }

        /*         if (movieArray[0] === undefined || movieArray[0].imdbID !== movieData.imdbID) {
                    movieArray.push(movieData)
                    localStorage.setItem('Movies', JSON.stringify([...movieArray]))
                }
                else {
                    for (var i = 0; i < movieArray.length; i++) {
                        if (movieArray[i] !== movieData) {
                            movieArray.push(movieData)
                            localStorage.setItem('Movies', JSON.stringify([...movieArray]))
                        }
                        else {
                            movieArray.splice(movieArray[i], 1)
                            localStorage.setItem('Movies', JSON.stringify(movieArray))
                        }
                    }
                } */
    }

    /*     const removeFavorites = () => {
     
        } */

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
                        <button onClick={controlFavorites}>Add Favorites</button>
                        {/*                         {checkFavories()
                            ? <button onClick={controlFavorites}>{controlFavorites() ? } </button>
                            : <button onClick={controlFavorites} style={{ background: 'blue' }}>Added Favorites </button>
                        } */}
                    </div >
                </div >
            </div >
        </div >
    )
}

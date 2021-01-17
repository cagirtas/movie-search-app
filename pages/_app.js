import '../styles/MovieList.sass'
import '../styles/results.sass'
import '../styles/MovieDetails.sass'
import { Provider } from 'react-redux'
import {useEffect} from 'react'
import store from '../redux/store'

export default function App({ Component, pageProps }) {

    useEffect(() => {
        const storedMovies = localStorage.getItem('Movies')
     storedMovies == null ? localStorage.setItem('Movies', JSON.stringify([])) : storedMovies
    },[])

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
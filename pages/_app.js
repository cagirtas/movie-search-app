import '../styles/MovieList.sass'
import '../styles/results.sass'
import '../styles/MovieDetails.sass'
import { Provider } from 'react-redux'
import { useEffect } from 'react'
import store from '../redux/store'

export default function App({ Component, pageProps }) {

  const ISSERVER = typeof window === "undefined";

  if (!ISSERVER) {
    localStorage.getItem('Movies', JSON.stringify([]))
  }

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
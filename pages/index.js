import Head from 'next/head'
import Header from '../components/Header'
import SearchBox from '../components/SearchBox'
import MovieDetails from '../components/MovieDetails'
import { useEffect } from 'react'

export default function Home() {

    return (
        <>
            <Head>
                <title>Movie Search App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <div className='banner-container'>
                <h1>Welcome to <b>MovieUp.</b></h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </p>
                <img src='/people-with-popcorn-watching-movie-in-cinema.jpg' />
            </div>
            <SearchBox />
        </>
    )
}
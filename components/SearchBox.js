import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchMovieByName, setSearchInput } from '../redux/Actions'
import { useRouter } from 'next/router'

function SearchBox() {

    const router = useRouter()
    const dispatch = useDispatch()

    const input = useSelector(state => state.globalStateMovies.input)
    const [tempInput, setTempInput] = useState('')

    useEffect(() => {
        dispatch(setSearchInput(tempInput))
    })

    const performSearch = () => {
        dispatch(searchMovieByName(input));
        router.push('/results')
    }

    function handleKeyDown(e) {
        if (e.key === 'Enter')
            performSearch()
    }
    const handleChange = (event) => {
        setTempInput(event.target.value)
    }

    return (
        <div className='search-box'>
            <li>
                <input className='search-box-style' type='text' value={input} onChange={handleChange} onKeyPress={handleKeyDown} placeholder='Search Movies' />
            </li>
            <li>
                <button className='search-box-button' onClick={performSearch}>Search</button>
            </li >
        </div >
    )
}

export default SearchBox
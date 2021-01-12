import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { searchMovieByName, setSearchInput } from '../redux/Actions'
import { useRouter } from 'next/router'

function SearchBox() {

    const router = useRouter()
    const dispatch = useDispatch()
    const [boxInput, setBoxInput] = useState('')

    const performSearch = () => {
        dispatch(setSearchInput(boxInput))
        dispatch(searchMovieByName(boxInput))
        router.push('/results')
    }

    function handleKeyDown(e) {
        if (e.key === 'Enter')
            performSearch()
    }
    const handleChange = (event) => {
        setBoxInput(event.target.value)
    }

    return (
        <div className='search-box'>
            <li>
                <input className='search-box-style' type='text' value={boxInput} onChange={handleChange} onKeyPress={handleKeyDown} placeholder='Search Movies' />
            </li>
            <li>
                <button className='search-box-button' onClick={performSearch}>Search</button>
            </li >
        </div >
    )
}

export default SearchBox
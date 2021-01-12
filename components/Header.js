import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { searchMovieByName, setSearchInput } from '../redux/Actions'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Header() {

    //menu
    const [burgerActive, setBurgerActive] = useState(false)
    const [menuActive, setMenuActive] = useState(false)

    function toggleMobileMenu() {
        setBurgerActive(!burgerActive)
        setMenuActive(!menuActive)
    }

    //searchbox
    const router = useRouter()
    const dispatch = useDispatch()
    const [headInput, setHeadInput] = useState('')

    const performSearch = () => {
        dispatch(setSearchInput(headInput))
        dispatch(searchMovieByName(headInput));
        router.push('/results')
    }

    function handleKeyDown(e) {
        if (e.key === 'Enter')
            performSearch()
    }
    const handleChange = (event) => {
        setHeadInput(event.target.value)
    }
    return (
        <nav>
            <div className='logo'>
                <a href='/'> <img src='./logo.svg' /></a>
            </div>
            <ul className={menuActive == false ? 'menu' : 'menu active'}>
                <li>
                    <Link href='/'>
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href='/favorites'>
                        <a>Favorites</a>
                    </Link>
                </li>
            </ul >
            <div className="nav-search-col">
                <input type='text' value={headInput} onChange={handleChange} onKeyPress={handleKeyDown} className='nav-search-box' placeholder='Enter Movie Name Here' />
                <img src='./search.svg' />
            </div>
            <div className={burgerActive == false ? 'mobile-bar' : 'mobile-bar active'} onClick={toggleMobileMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav >
    )
}
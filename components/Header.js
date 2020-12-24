import React, { useState } from 'react'
import Link from 'next/link'

export default function Header() {

    const [burgerActive, setBurgerActive] = useState(false)
    const [menuActive, setMenuActive] = useState(false)

    function toggleMobileMenu() {
        setBurgerActive(!burgerActive)
        setMenuActive(!menuActive)
    }

    const handleChange = () => {

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
                    <a href='#'>Favorites</a>
                </li>
            </ul >
            <div className="nav-search-col">
                <input value='' onChange={handleChange} className='nav-search-box' placeholder='Enter Movie Name Here' />
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
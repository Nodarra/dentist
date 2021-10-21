import React from 'react'

import "../styles/Navbar.css"

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="logo__container">
                LOGO
            </div>
            <div className="nav__link__container">
                <div className="nav__link">POČETNA</div>
                <div className="nav__link">USLUGE</div>
                <div className="nav__link">O NAMA</div>
                <div className="nav__link">KONTAKT</div>
            </div>
        </div>
    )
}

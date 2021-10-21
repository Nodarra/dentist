import React from 'react'

import Hands from '../media/hands.png'
import '../styles/Pocetna.css'

export default function Pocetna() {
    return (
        <div className="pocetna">
            <div className="pocetna__inner">
                <div className="heading">
                    <h1>Dobrodošli</h1>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                    </p>
                    <div className="contact__btn">
                        <p>KONTAKT</p>
                    </div>
                </div>
                <div className="heading__img__container">
                     <img className="heading__img" src={Hands} alt="hands"/>
                </div>
            </div>
        </div>
    )
}

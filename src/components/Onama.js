import React from 'react'
import Dentist from '../images/4.png'
import '../styles/Onama.css'

export default function Onama() {
    return (
        <div className="onama">
            <div className="onama__inner">
                <div className="onama__img__container">
                    <img className="onama__img" src={Dentist} alt="dentist"/>
                </div>
                <div className="onama__text__container">
                    <h1 className="onama__heading">O nama</h1>

                    <p className="onama__description"><b>Ordinacija</b> se sastoji od manjeg stručnog tima doktora i asistenata tako da obuhvaćamo sve stomatološke specijalnosti. Protetiku u ordinaciji radi isklučivo Dr. Med. Kengo. Cjelokupan rad ordinacije baziran je na principima zdrave, holističke stomatologije, tj. svi naši materijali su biokompatibilni i zdravi za organizam. Naš tim pružit će Vam ljubaznost, prevazilaženje straha od stomatologije i najsavremenije stomatološke zahvate</p>
                </div>
            </div>
            <div className="shadow__two"></div>
        </div>
    )
}

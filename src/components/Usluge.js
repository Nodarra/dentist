import React from "react";
import First from '../images/1.png'
import Second from '../images/2.png'
import '../styles/Usluge.css'
 function Usluge (){
    return(
        <div className="usl">
            
            <div className="usluge">
            <div className="header__usluge">
                <h1 className="header">Naše usluge</h1>
                </div>
                <div className="cards__usluge">
                <div className="card">
                    <img src={First} alt="First" className="imges" />
                    <div className="info">
                        <h2 className="header__card">ORTODONCIJA </h2>
                        <p className="information">Ortodonciju u našoj ordinaciji radimo sa 4 vrste estetskih aparatića za zube 
                        koji su karakteristika ordinacije koja u ovom području
                        dovodi sve najmodernije iz svijeta stomatologije. Danas ortodontsku terapiju 
                        vršimo kod pacijenata u svakoj životnoj dobi, a ne samo kod djece...</p>
                        <div className="visee">
                        <a href="_blank" className="vise">Pročitaj više</a>
                        </div>
                    </div>
                </div>
                <br/>
                <div className="card1">
                    <img src={Second} alt="Second" className="imges" />
                    <div className="info">
                        <h2 className="header__card">PROTETIKA</h2>
                        <p className="information">Zubna klinika pruža usluge izrade svih vrsta protetskih radova,
                     danas sa naglaskom na bezmetalne navlake i mostove, protetiku na implantatima, protetiku
                      bezubih čeljusti na 4 implantata All–on–four i sve vrste proteza. Radimo sve vrste protetskih
                       radova koji se rade i u najvećim klinikama u svijetu...</p>
                       <div className="visee">
                        <a href="_blank" className="vise">Pročitaj više</a>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        
    );
}
export default Usluge;
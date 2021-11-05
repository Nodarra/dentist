import "../styles/Kontakt.css"

export default function Kontakt() {
    return (
        <div className="kontakt">
            <h1 className="kontakt__heading">Kontaktirajte nas</h1>
            <div className="kontakt__inner">
                <div className="form__container">
                    <div className="form__container__inner">
                    <p className="form__heading">Ostavite poruku</p>
                    <form className="form">
                        <div className="input">
                            <input placeholder="Name"></input>
                        </div>
                        <div className="input">
                            <input placeholder="Email"></input>
                        </div>
                        <div className="input">
                            <textarea placeholder="Vaša poruka"></textarea>
                        </div>
                    </form>
                    </div>
                </div>
                <div className="kontakt__options">
                    <div className="kontak__options__inner">
                    <p className="kontak__options__heading">Kontakt info</p>

                    <p><b>Adresa:</b> Aska Borica 30</p>

                    <p><b>Broj:</b> 032 - 225 / 883</p>

                    <p><b>Email:</b> info@dentis.ba</p>

                    <iframe title="adresa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2859.9401683561646!2d17.907079542784235!3d44.208298651502844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475ee24f0fe272c9%3A0x5d94266209f25bda!2sDr.%20Abdulaziza%20Aska%20Bori%C4%87a%2030%2C%20Zenica%2072000!5e0!3m2!1sen!2sba!4v1636119454733!5m2!1sen!2sba" width="400" height="250"  allowfullscreen="" loading="lazy"></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

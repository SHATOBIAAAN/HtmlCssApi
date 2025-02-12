import './scss/Header.scss'

function Header() {
    return (
        <div className="header">
            <div className="header__container">
                <div className="header__logo">
                    <img
                        src="https://s3-alpha-sig.figma.com/img/5f6c/ff2a/f860721b78e44efb8069671c4d09a4de?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VxHa~x1c31p1h6uq05BQp3mzH~Sq64IhkFmp378DU-CdiibvVOdOh1AmEQgYU20BpK~Xqf9ZGxG~wFD5PINQBlhjKBBkko6efBRRghZgJpb3T-34ARKuaA-3wUZHhJcy-amLq2if6ZThNdqO3CijNiFDMS-uyyI-Em1rHpiQRe9v58lPEIo-xpp6-Oat9VxTve2Y2juo-D0XUHw2YB~jpWhu8G5TvpIAci~ipx5mWUqlwGlyU6Sik1z717wDHK3iecF~mRxPcIA17GVVKJRSusmMRUv2VK31BR91fkrG~clOPi0hKVtHKJrGaegVRNv-VZIkIPEznkdFLIq7uUHgwg__"
                        alt="logo"
                    />
                </div>
                <div className="header__menu">
                    <ul>
                        <li>
                            <a href="#">О нас</a>
                        </li>
                        <li>
                            <a href="#">Услуги</a>
                        </li>
                        <li>
                            <a href="#">Аренда</a>
                        </li>
                    </ul>
                </div>
                <div className="header__button">
                    <button>Связаться</button>
                </div>
            </div>
            <div className="header__main-container">
                <div className="header__main-text">
                    <div className="header__main-h1">
                        <h1>Веломастерская “Велозар”</h1>
                    </div>
                    <div className="header__main-p">
                        <p>
                            Мы, мастера веломастерской «Велозар», как раз те
                            самые счастливые люди, которые смогли превратить
                            свое увлечение и хобби в профессию. Мы сами любим
                            кататься и хотим чтобы Ваш двухколесный друг
                            приносил Вам только радость и удовольствие от езды.
                        </p>
                    </div>
                </div>
                <div className="header__main-image">
                    <img
                        src="https://s3-alpha-sig.figma.com/img/2764/0d73/1b417019fb942a5f01872dac19ddd5cf?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=dcnVlszXs75WNW6ce-Uav632YTEyJ-MExpa92VVpW8lEvVkWo2KJ3tC2jrpvjEiOyIjt4ePaRqeNikRb84soRJ7PftVucdqL2cyUltb7nlku~3E6W5pLnUdmfdUA66IMeIazFwWLHaj2tHeFb4rm-yUUKThLsux2yb9FfrVvZtAQzvPVJS3XvuYEVWwmFMw6vFVq4xBBlkg5tyV7sXAmGwFF89Z5N-BLo1jKQ1Mttxv1oVK8ooZNuwdKq4YzPUnIgYf0wZxayVEIRdhyQjj8PndOlPspjiGEG593Py3fUKIE1Va-tkpHgJq8wZwgpaLmkmofIqIXRwh2E-cP1eY3Cw__"
                        alt="image"
                    />
                </div>
            </div>
        </div>
    )
}

export default Header

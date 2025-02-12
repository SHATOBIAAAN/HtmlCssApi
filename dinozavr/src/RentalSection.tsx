import './scss/RentalSection.scss'
function RentalSection() {
    return (
        <>
            <div className="rental-section">
                <div className="rental-section__container">
                    <div className="rental-section__image">
                        <img
                            src="https://s3-alpha-sig.figma.com/img/eae9/8f9e/1fb72ce0173b50528722a0c1626b7947?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=KeQW7bpEV6htfMtc7ZwhBk6ig3g~Pb2oQz7h8ah3mPsMO9kqkZPmWTtXSKs0ie-lERT1paqfAGy-GKTgliTc8mFyOshNZn-RbxJs21I97NByOlmCz8i6TZziC9kxExKnlf-fcHXQCRt3s5G-o6GbuYAuu58M4xnIYW89ox-wIamFtA5WKuKqmGADHYsFk~4wSzZgR5uLNMx~Yon0RrNG7~hITJcTWvl0XeJHN3exr50wqTWWjRD91bJaYo5iKld77MFtTBpm0xwCu9H-ETHjG22i1~EdjzeGxkTE57aKSysrk2vzfw4bgtyfTe5rDYj1JzVvCVva4AyZnAWFzBLheQ__"
                            alt="Велосипед"
                        />
                    </div>
                    <div className="rental-section__content">
                        <h1>Прокат велосипедов</h1>
                        <div className="rental-section__description">
                            <p>
                                У нас вы можете взять на прокат хорошо
                                обслуженные и настроенные велосипеды. Как раз мы
                                находимся в прекрасном парке!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default RentalSection

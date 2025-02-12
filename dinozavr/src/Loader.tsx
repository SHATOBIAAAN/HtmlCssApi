import './scss/Loader.scss'

function Loader() {
    return (
        <div className="loader">
            <div className="loader__spinner"></div>
            <div className="loader__text">Загрузка...</div>
        </div>
    )
}

export default Loader

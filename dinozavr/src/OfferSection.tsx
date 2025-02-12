import { useRef, useEffect } from 'react'
import './scss/OfferSection.scss'

function OfferSection() {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target
                            .querySelector('.offer-section__title')
                            ?.classList.add('animated')
                        entry.target
                            .querySelector('.offer-section__content')
                            ?.classList.add('animated')
                        entry.target
                            .querySelector('.offer-section__image')
                            ?.classList.add('animated')
                    }
                })
            },
            { threshold: 0.2 },
        )

        if (containerRef.current) observer.observe(containerRef.current)

        return () => observer.disconnect()
    }, [])

    return (
        <div className="offer-section" ref={containerRef}>
            <div className="offer-section__container">
                <div className="offer-section__title">
                    <h2>Что мы предлагаем</h2>
                </div>
                <div className="offer-section__content">
                    <p>
                        В нашей мастерской можно выполнить комплексное
                        техническое обслуживание велосипеда, ремонт и настройку
                        всех его узлов, шиномонтажные работы. Вовремя
                        проведенное ТО велосипеда помогает избежать многих
                        проблем и дорогого ремонта. Все работы выполняем
                        качественно и с душой.
                    </p>
                </div>
            </div>
            <div className="offer-section__image">
                <img
                    src="https://s3-alpha-sig.figma.com/img/b231/70b5/bcbe80cfb62f25752a909afa5147aa0f?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=KLQSgNGT716vy1J2EonM7F7sDxeNcMs3J2jEZhumTtO8RiaeFMKpioVD-hi1QyjKjTFhHQx--scAqb8y3zm3R3GHz9howKCleD2eAhrsFNyPupPH-nn2hh1af6TZYOR8EgWLGuobRm3Z0zWcXoUMfU6lbaVQWYGrq9kJsVBVmsez7xHwaJb7gpMNJ5VLxhtObFSa5Dyb5rzGyYzRYSi1uUkUTHuXNg7Eskn1eHTdzJ81uCoD4UyChh7viQLTJQ6uxQkeShWlIQT-fRCQnvHlFY16G0zG8Q~qS7nksI1wme1~PkIwXyys8-UdhJzk2KU97PhxomM7RK3BlEedkh7~GQ__"
                    alt="Велосипед"
                />
            </div>
        </div>
    )
}

export default OfferSection

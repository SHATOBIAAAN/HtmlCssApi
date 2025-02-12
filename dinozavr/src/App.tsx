import  { useState, useEffect } from 'react'
import './scss/App.scss'
import Header from './Header'
import OfferSection from './OfferSection'
import DescriptoinSection from './DescriptoinSection'
import ServiceSection from './Service/ServiceSection'
import RentalSection from './RentalSection'
import Loader from './Loader'


function App() {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 2000)

        return () => clearTimeout(timer)
    }, [])

    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    <Header />
                    <OfferSection />
                    <DescriptoinSection />
                    <ServiceSection />
                    <RentalSection />
                </>
            )}
        </>
    )
}

export default App

import ServiceIteam from './ServiceIteam'
import '../scss/ServiceSection.scss'
function ServiceSection() {
    const serviceItems = [
        { color: '#22356F', text: 'Годовое ТО' },
        { color: '#0052C1', text: 'Выравнивание колес' },
        { color: '#76B58B', text: 'Настройка переключателей' },
        { color: '#FF9F43', text: 'Чистка и смазка' },
        
    ]
    return (
        <div className="service-section">
            {serviceItems.map(item => (
                <ServiceIteam
                    key={item.color}
                    colorhex={item.color}
                    text={item.text}
                />
            ))}
        </div>
    )
}

export default ServiceSection

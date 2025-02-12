import '../scss/ServiceIteam.scss'
interface ServiceIteamProps {
    colorhex: string
    text: string
}

function ServiceIteam({ colorhex, text }: ServiceIteamProps) {
    return (
        <div className="service-item" style={{ backgroundColor: colorhex }}>
            <h1>{text}</h1>
        </div>
    )
}

export default ServiceIteam

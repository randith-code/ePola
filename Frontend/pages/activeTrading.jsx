import { SellerTradingCard } from '../components/TradingComponents'

const activeTrading = () => {
    return(
        <div style={{
            display:"flex",
            flexDirection:"column",
            alignItems:"center"
        }}>
            <SellerTradingCard/>
            <SellerTradingCard/>
        </div>
    )
}

export default activeTrading
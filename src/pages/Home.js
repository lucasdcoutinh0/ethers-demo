import Navbar from "../components/navbar/Navbar"
import {AiOutlineRead, AiFillEdit, AiOutlineHistory} from 'react-icons/ai'
import {connect} from '../constants/metaMaskConnect'
import mumbai from '../constants/mumbai'

const Home = () => {
    connect()
    if(window.ethereum.networkVersion === '80001'){
        console.log('Succes')
    }
    else{
        window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [mumbai]
        }) 
    }
    return(
        <div>
            <Navbar/>
            <div className="body">
                <div className="card" onClick={() => window.location.replace('/read')}>
                    <AiOutlineRead style={{fontSize: "5rem"}}/>
                    <br/>
                    <h1>Read Functions</h1>
                </div>
                <div className="card" onClick={() => window.location.replace('/write')}>
                    <AiFillEdit style={{fontSize: "5rem"}}/>
                    <br/>
                    <h1>Write Functions</h1>
                </div>
                <div className="card" onClick={() => window.location.replace('/history')}>
                    <AiOutlineHistory style={{fontSize: "5rem"}}/>
                    <br/>
                    <h1>Last Transactions</h1>
                </div>
            </div>
        </div>
    )
}
export default Home
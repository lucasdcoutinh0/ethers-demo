import Navbar from "../components/navbar/Navbar"
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {getDecimals, getName, getOwner, getSymbol, getTotalSupply} from '../constants/readFunctions'
const Read = () => {
    
    return(
        <div>
            <Navbar/>
                <div className="function content">
                <div className="function box" onClick={() => window.location.replace('/allowance')}>
                    <span className="function text">allowance</span>
                </div>
                <div className="function box" onClick={() => window.location.replace('/balanceof')}>
                    <span className="function text">balanceOf</span>
                </div>
                <div className="function box" onClick={() => getDecimals()}>
                    <span className="function text">decimals</span>
                </div>
                <div className="function box" onClick={() => getName()}>
                    <span className="function text">name</span>
                </div>
            </div>
            <div className="function content">
                <div className="function box" onClick={() => getOwner()}>
                    <span className="function text">owner</span>
                </div>
                <div className="function box" onClick={() => getSymbol()}>
                    <span className="function text">symbol</span>
                </div>
                <div className="function box" onClick={() => getTotalSupply()}>
                    <span className="function text">totalSupply</span>
                </div>
            </div>
            <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    )
}
export default Read
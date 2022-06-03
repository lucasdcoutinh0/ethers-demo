import Navbar from "../components/navbar/Navbar"
import {ToastContainer} from "react-toastify"
import {renounceOwnership} from "../constants/writeFunctions"
const Write = () => {
    return(
        <div>
            <Navbar/>
            <div className="function content">
                <div className="function box" onClick={() => window.location.replace('/approve')}>
                    <span className="function text">approve</span>
                </div>
                <div className="function box" onClick={() => window.location.replace('/burn')}>
                    <span className="function text">burn</span>
                </div>
                <div className="function box" onClick={() => window.location.replace('/burnfrom')}>
                    <span className="function text">burnFrom</span>
                </div>
                <div className="function box" onClick={() => window.location.replace('/decreaseallowance')}>
                    <span className="function text">decreaseAllowance</span>
                </div>
                <div className="function box" onClick={() => window.location.replace('/increaseallowance')}>
                    <span className="function text">increaseAllowance</span>
                </div>
            </div>
            <div className="function content">
                <div className="function box" onClick={() => window.location.replace('/mint')}>
                    <span className="function text">mint</span>
                </div>
                <div className="function box" onClick={renounceOwnership}>
                    <span className="function text">renounceOwnership</span>
                </div>
                <div className="function box" onClick={() => window.location.replace('/transfer')}>
                    <span className="function text">transfer</span>
                </div>
                <div className="function box" onClick={() => window.location.replace('/transferfrom')}>
                    <span className="function text">transferFrom</span>
                </div>
                <div className="function box" onClick={() => window.location.replace('/transferownership')}>
                    <span className="function text">transferOwnership</span>
                </div>
            </div>
            <ToastContainer
                position="top-center"
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
export default Write
import Navbar from "../components/navbar/Navbar"
const Write = () => {
    return(
        <div>
            <Navbar/>
            <div className="function content">
                <div className="function box">
                    <span className="function text">approve</span>
                </div>
                <div className="function box">
                    <span className="function text">burn</span>
                </div>
                <div className="function box">
                    <span className="function text">burnFrom</span>
                </div>
                <div className="function box">
                    <span className="function text">decreaseAllowance</span>
                </div>
                <div className="function box">
                    <span className="function text">increaseAllowance</span>
                </div>
            </div>
            <div className="function content">
                <div className="function box">
                    <span className="function text">mint</span>
                </div>
                <div className="function box">
                    <span className="function text">renounceOwnership</span>
                </div>
                <div className="function box">
                    <span className="function text">transfer</span>
                </div>
                <div className="function box">
                    <span className="function text">transferFrom</span>
                </div>
                <div className="function box">
                    <span className="function text">transferOwnership</span>
                </div>
            </div>
        </div>
    )
}
export default Write
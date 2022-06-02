import Navbar from "../../components/navbar/Navbar"
import { useState } from "react"
import contract from "../../constants/writeContract"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Burn = () => {
    const [amount, setAmount] = useState()
    
    async function burn(){
        const burned = await contract.burn(amount)
        .then((burned) => {
            toast.success('Transaction approved with hash' + burned.hash, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
            console.log(burned.hash)
        }
        )
        .catch((error) => console.log(error))
    }

    return(
        <div>
            <Navbar/>
            <div className="function content">
                <div className="function read-box">
                    <h1 style={{color: '#FFF'}}>Amount</h1>
                    <div className="info">
                    <p className="function label">Amount (uint256)</p>
                    <input className="function input" type="number" onChange={(e) =>setAmount(e.target.value)}></input>
                    </div>
                    <div className="info">
                        <button className="btn query" onClick={burn}>Write</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Burn
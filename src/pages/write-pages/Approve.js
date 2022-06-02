import Navbar from "../../components/navbar/Navbar"
import { useState } from "react"
import contract from "../../constants/writeContract"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Approve = () => {
    const [spender, setSpender] = useState('')
    const [amount, setAmount] = useState()
    
    async function approveSpender(){
        const approval = await contract.approve(spender, amount)
        .then((approval) => {
            toast.success('Transaction approved with hash' + approval.hash, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
            console.log(approval.hash)
        }
        )
        .catch((error) => console.log(error))
    }

    return(
        <div>
            <Navbar/>
            <div className="function content">
                <div className="function read-box">
                    <h1 style={{color: '#FFF'}}>Approve</h1>
                    <div className="info">
                    <p className="function label">Spender (address)</p>
                    <input className="function input" onChange={(e) => setSpender(e.target.value)}></input>
                    </div>
                    <div className="info">
                    <p className="function label">Amount (uint256)</p>
                    <input className="function input" type="number" onChange={(e) =>setAmount(e.target.value)}></input>
                    </div>
                    <div className="info">
                        <button className="btn query" onClick={approveSpender}>Write</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Approve
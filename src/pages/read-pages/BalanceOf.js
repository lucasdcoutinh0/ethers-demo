import Navbar from '../../components/navbar/Navbar'
import contract from '../../constants/readContract'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useState} from 'react'

const BalanceOf = () => {
    const [address, setAddres] = useState('')
    
    async function checkBalance(e){
        e.preventDefault()
        const balance = await contract.balanceOf(address)
        .then((balance) => toast("The account balance is: " + Number(balance/Math.pow(10, 18)) + " BRLC", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            }))
    }
    return(
        <div>
            <Navbar/>
            <div className="function content">
                <div className="function read-box">
                    <h1 style={{color: '#FFF'}}>BalanceOf</h1>
                    <div className="info">
                        <p className="function label">Address:</p>
                        <input className="function input" onChange={(e) => setAddres(e.target.value)}></input>
                    </div>
                    <div className="function info">
                        <button className="btn query" onClick={checkBalance}>Query</button>
                    </div>
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
export default BalanceOf
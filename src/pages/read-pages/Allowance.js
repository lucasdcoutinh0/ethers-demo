import Navbar from '../../components/navbar/Navbar'
import contract from '../../constants/readContract'
import {useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Allowance = () => {
    const [owner, setOwner] = useState('')
    const [spender, setSpender] = useState('')

    async function checkAllowance(e){
        e.preventDefault()
        const allowance = await contract.allowance(owner, spender)
        .then((allowance) => toast("The user can spend: " + Number(allowance/Math.pow(10, 18)) + " BRLC", {
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
            <div className="body">
                <div className="function read-box">
                    <h1 style={{color: '#FFF'}}>Allowance</h1>
                    <div className="info">
                        <p className="function label">Owner (Address):</p>
                        <input className="function input" onChange={(e) => setOwner(e.target.value)}></input>
                    </div>
                    <div className="info">
                        <p className="function label">Spender (Address):</p>
                        <input className="function input" onChange={(e) => setSpender(e.target.value)}></input>
                    </div>
                    <div className="info">
                        <button className="btn query" onClick={checkAllowance}>Query</button>
                    </div>
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
export default Allowance
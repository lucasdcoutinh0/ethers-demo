import Navbar from "../../components/navbar/Navbar"
import { useState } from "react"
import contract from "../../constants/writeContract"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Transfer = () => {
    const [address, setAddress] = useState('')
    const [amount, setAmount] = useState()

    async function transfer(){
        const transfered = await contract.transfer(address, amount)
        .then((transfered) => {
            toast.success('Transaction approved with hash: ' + transfered.hash, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        })
        .catch((error) => console.log(error))
    }
    return(
        <div>
              <Navbar/>
            <div className="function content">
                <div className="function read-box">
                    <h1 style={{color: '#FFF'}}>Transfer</h1>
                    <div className="info">
                    <p className="function label">Address</p>
                    <input className="function input" onChange={(e) => setAddress(e.target.value)}></input>
                    </div>
                    <div className="info">
                    <p className="function label">Amount (uint256)</p>
                    <input className="function input" type="number" onChange={(e) =>setAmount(e.target.value)}></input>
                    </div>
                    <div className="info">
                        <button className="btn query" onClick={transfer}>Write</button>
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

export default Transfer
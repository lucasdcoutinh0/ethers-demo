import {useState} from 'react'
import { ethers } from 'ethers'

const CreateAccount = () => {
    const [signatureHash, setSignatureHash] = useState()
    let provider = new ethers.providers.Web3Provider(window.ethereum)
    let signer = provider.getSigner()

    const createAccount = (e) => {
        e.preventDefault()
        if (window.ethereum) {
          window.ethereum
            .request({ method: "eth_requestAccounts" })
            .then((res) => {
                singMessage()
            });
        } else {
          alert("install metamask extension!!");
        }
      }
    async function singMessage(){
        let signature = await signer.signMessage("Login")
        .then((signature) => setSignatureHash(signature))
    }

    return(
            <div className="container">
            <div className="create-account box">
                <h1 className="title">Create Account</h1>
                <div className="info">
                    <button className="metamask btn" onClick={createAccount}>Create</button>
                </div>
                <div className="create-account result">
                    {
                        signatureHash !== undefined 
                        ?<span>Account Successfully created! <br/> Please send this hash to the admin <br/> <span className="create-account signature">{signatureHash}</span></span>
                        :null
                    }
                </div>
                <div className="info">
                    <a className="create-account text" href="/">Go back to the login</a>
                </div>
            </div>
        </div>
    )
}

export default CreateAccount
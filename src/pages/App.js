import { ethers } from 'ethers'
const App = () => {
    let provider = new ethers.providers.Web3Provider(window.ethereum)
    let signer = provider.getSigner()

    const login = (e) => {
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
        .then((signature) => {
            if(signature === "0x7d0766f4429b772d0a61d8607d9a4afbd6cb9069f2fbd6907bdd0994b997c1cd3809750d2e92b70603c4a99d841b8675643167f886aed793d55fb936674a59951b"){
                window.location.replace('/home')
            }
            else{
                alert("Account not finded")
            }
        })
    }
    
    return(
        <div className="container">
            <div className="login box">
                <h1 className="title">Ethers.js Demo</h1>
                <div className="info">
                    <button className="metamask btn" onClick={login}>Login</button>
                </div>
                <div className="info">
                <a className="create-account" href="/createaccount">create account</a>
                </div>
            </div>
        </div>
    )
}
export default App
import { useState, useEffect, useRef } from 'react';
import jazzicon from "@metamask/jazzicon"
import {BsChevronDown} from 'react-icons/bs'
import './Navbar.modules.css'


const Navbar = () => {
    const [account, setAccount] = useState()
    const avatarRef = useRef()
  
    useEffect(() =>{
        window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((res) => setAccount(res[0].substring(4, 0) + '...' + res[0].substring(0,4)));
    },[])
    useEffect(() => {
        const element = avatarRef.current;
        if (element && account) {
            const addr = account.slice(2, 10);
            const seed = parseInt(addr, 16);
            const icon = jazzicon(25, seed);
            if (element.firstChild) {
                element.removeChild(element.firstChild);
            }
            element.appendChild(icon);
        }
    }, [account, avatarRef]);
    return(
        <nav>
            <div className="navbar logo">
                <a className="nav-link" href="/home"><h4>Ethers.js Demo</h4></a>
            </div>
            <div className="navbar account">
                    <div className="navbar avatar"ref={avatarRef}></div>
                    <div className="navbar text">{account} <BsChevronDown/></div>
            </div>
        </nav>
    )
}
export default Navbar
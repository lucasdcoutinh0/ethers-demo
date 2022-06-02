import contract from '../constants/readContract'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export async function getDecimals(){
    const decimals = await contract.decimals()
    .then((decimals) => toast("The contract have : " + decimals + " Decimals", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        }))     
}
export async function getName(){
    const name = await contract.name()
    .then((name) => toast("The contract name is : " + name, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        }))     
}
export async function getOwner(){
    const owner = await contract.owner()
    .then((owner) => toast("The contract owner is : " + owner, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        }))     
}
export async function getSymbol(){
    const symbol = await contract.symbol()
    .then((symbol) => toast("The contract owner is : " + symbol, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        }))     
}
export async function getTotalSupply(){
    const totalSupply = await contract.totalSupply()
    .then((totalSupply) => toast("The total supply is: " + Number(totalSupply/Math.pow(10, 18)) + " BRLC", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        }))
}

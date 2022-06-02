import {ethers} from 'ethers';
import RealCoinABI from '../contracts/RealCoinABI.json'

let provider = new ethers.providers.Web3Provider(window.ethereum)
const contract = new ethers.Contract("0x5D1Feaf30BFa85cdE78cb88C4589f411DED1D0d0", RealCoinABI, provider)
export default contract
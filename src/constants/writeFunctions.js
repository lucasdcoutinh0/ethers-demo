import contract from './writeContract'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export async function renounceOwnership(){
    const renounce = contract.renounceOwnership()
    .then((renounce) => {
        toast.success('Transaction approved with hash: ' + renounce.hash, {
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
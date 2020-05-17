import {Creators} from './actions';
import {default as toastr} from 'Redux/toastr/operations';
import {ethers} from 'ethers';


const init = () => async dispatch => {
    try {
        let {
            provider,
            address
        } = await getProvider();
        dispatch(Creators.initSuccess(provider, address));
    } catch (e) {
        console.log(e);
        dispatch(Creators.failure(e));
        dispatch(toastr.error("Problem initializing wallet"));
    }
}


export const getProvider = async () => {
    
    let prov = null;
    let address = null;
    if(typeof window.ethereum !== 'undefined') {

        prov = window.ethereum;
        
        try {
            [address] = await prov.enable();
        } catch (e) {
            console.log(e);
            return null;
        }

    }
    return {
        provider: new ethers.providers.Web3Provider(prov, "homestead"),
        address
    }
}

export default {
    init
}
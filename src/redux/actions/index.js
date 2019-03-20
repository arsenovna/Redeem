import { FETCH_PERKS } from '../constants/action-types';
import { FETCH_MERCHANT } from '../constants/action-types';

export const getPerksRequest = (payload) => {
    // console.log('payload', payload);
    return {
        type: FETCH_PERKS,
        payload
    }
}

export const getMerchantRequest = (payload) => {
    return {
        type: FETCH_MERCHANT,
        payload
    }
}














import Base from './base';
import { merchantAPI } from './API/index';

const baseService = new Base();

export default class MerchantService {

    // constructor(){}

    getMerchant = () => baseService.getJson(merchantAPI);

    editMerchant = (data) => baseService.putJson(merchantAPI + data.merchant.id, JSON.stringify(data));

    editProfile = (data) => baseService.putJson(merchantAPI + data.merchant.id, JSON.stringify(data));
}
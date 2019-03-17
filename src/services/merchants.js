import Base from './base';
import { merchantAPI } from './API/index';

const baseService = new Base();

export default class MerchantService {

    // constructor(){}

    getMerchant = () => baseService.getJson(merchantAPI);

    editMerchant = (data) => baseService.postJson(merchantAPI + data.merchant.id, data);

}
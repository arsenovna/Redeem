import Base from './base';
import { perksAPI, editPerkAPI } from './API/index';


const baseService = new Base();

export default class PerksService {

    // constructor(){}

    getPerks = () => baseService.getJson(perksAPI);

    editPerk = (data) => baseService.postJson(editPerkAPI, data);
}
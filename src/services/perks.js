import Base from './base';
import { perksAPI } from './API/index';

const baseService = new Base();

export default class PerksService {

    constructor(){}

    getPerks = () => baseService.getJson(perksAPI);
}
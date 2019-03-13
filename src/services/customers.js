import Base from './base';
import { customersAPI } from './API/index';

const baseService = new Base();

export default class CustomersService {

    constructor(){}

    getCustomers = () => baseService.getJson(customersAPI);
}
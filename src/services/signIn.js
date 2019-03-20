import Base from './base';
import { loginAPI } from './API/index';

const baseService = new Base();

export class SignInService {
    signIn = (data) => baseService.postJson(loginAPI, data);
}
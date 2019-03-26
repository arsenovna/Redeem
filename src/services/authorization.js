import Base from './base';
import { signUpAPI, loginAPI } from './API/index';

const baseService = new Base();

export class AuthService {

    signIn = (data) => baseService.postJson(loginAPI, data);
    
    signUp = (data) => baseService.postJson(signUpAPI, data);
}

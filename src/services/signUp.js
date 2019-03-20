import Base from './base';
import { signUpAPI } from './API/index';

const baseService = new Base();

export class SignUpService {
    signUp = (data) => baseService.postJson(signUpAPI, data);
}


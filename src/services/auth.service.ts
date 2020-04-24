import { Injectable } from "@angular/core";
import { CredenciaisDTO } from "../models/credenciais.dto";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../config/api.config";
import { LocalUser } from "../models/localuser";


@Injectable()
export class AuthService {

    constructor(public http: HttpClient) {
    }

    authenticate(creds : CredenciaisDTO) {
        return this.http.post(
            `${API_CONFIG.baseUrl}/login`, 
            creds,
            {
                observe: 'response',
                responseType: 'text'
            });
    }

    successfulLogin(authorizationValue : String){

        let tok = authorizationValue.substring(7);
        let user : LocalUser = {
            token : tok
        };
        this.storage.setLocaluser(user)
    }
}
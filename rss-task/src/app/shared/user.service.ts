import { Injectable, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    readonly serverUrl = "http://localhost:49831/"

    @Output() logged = false;

    @Output() login: string;

    constructor(private http: HttpClient) { }

    userAuthentication(userName, password) {
        var data = "username=" + userName + "&password=" + password + "&grant_type=password";
        var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded'});
        return this.http.post(this.serverUrl + '/token', data, { headers: reqHeader });
    }

    userRegistration(userName, email, password, confirmPassword){
        var body = {
            "Email":email,
            "userName": userName,
            "Password": password,
            "ConfirmPassword": confirmPassword
        }

        return this.http.post(this.serverUrl + '/api/account/register', body);
    }

    logOut(){
        this.logged = false;
        localStorage.removeItem("userToken");
    }
}

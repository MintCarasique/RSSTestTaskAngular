import { Injectable, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    readonly serverUrl = "http://localhost:49831/"

    @Output() logged = false;

    constructor(private http: HttpClient) { }

    userAuthentication(userName, password) {
        var data = "username=" + userName + "&password=" + password + "&grant_type=password";
        var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded'});
        return this.http.post(this.serverUrl + '/token', data, { headers: reqHeader });
    }

    logOut(){
        this.logged = false;
        localStorage.removeItem("userToken");
    }
}

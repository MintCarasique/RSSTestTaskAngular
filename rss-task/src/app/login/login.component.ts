import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {    

    isLoginError: boolean = false;

    constructor(private userService: UserService, private router: Router) { }

    ngOnInit() {
    }

    OnSubmit(username, password){
        this.userService.userAuthentication(username, password).subscribe((data : any)=>{
         localStorage.setItem('userToken',data.access_token);
         this.userService.logged = true;
         this.userService.login = data.userName;
         this.router.navigate(['/home']);
       },
       (err : HttpErrorResponse)=>{
         this.isLoginError = true;
       });
   }
}

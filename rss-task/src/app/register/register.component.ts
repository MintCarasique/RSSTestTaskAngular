import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    isRegisterError: boolean = false;

    errorText: string;

    constructor(private userService: UserService, private router: Router) { }

    ngOnInit() {
    }

    OnSubmit(login: string, email: string, password: string, confirmPass: string) {
        this.userService.userRegistration(login, email, password, confirmPass).subscribe(
            (data: any) => {
                this.router.navigateByUrl("/login");
                this.isRegisterError = false;
            },
            (err: HttpErrorResponse) => {
                if (err.status == 400) {
                    this.errorText = "Incorrect registration data"
                    this.isRegisterError = true;
                }
            });

    }

}

import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-navigation-bar',
    templateUrl: './navigation-bar.component.html',
    styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

    constructor(private userService: UserService, private router: Router) { }

    ngOnInit() {
        if (localStorage.getItem("userToken") != null) {
            this.userService.logged = true;
        } else {
            this.userService.logged = false;
        }
    }

    onLogOut() {
        this.userService.logOut();
        this.router.navigateByUrl("/login");
    }

}

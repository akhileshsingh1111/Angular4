import { Component } from '@angular/core'
import { AuthService } from './auth.service'
import { Router } from '@angular/router'
@Component({
    templateUrl: 'app/user/login.component.html',
    styles: [`
     em {float:right; color:#E05C65; padding-left:10px}`
    ]
})

export class LoginComponent {
    invalidLogin: any
    constructor(private authService: AuthService, private router: Router) {

    }
    login(formValues) {
        this.authService.loginUser(formValues.userName, formValues.password)
       // this.authService.loginUserAsyn(formValues.userName, formValues.password).subscribe(response => {
       //     if (!response) {
       //         this.invalidLogin = true
       //         this.router.navigate(['projects'])
       //     }
       // })
        this.router.navigate(['projects'])
    }
    cancel() {
        this.router.navigate(['projects'])
    }
} 
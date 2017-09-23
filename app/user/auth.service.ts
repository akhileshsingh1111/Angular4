import { Injectable } from '@angular/core'
import { IUser } from './user.model'
import { Http, Response, Request, RequestOptions, Headers } from '@angular/http'
import { Observable } from 'rxjs/Rx'
@Injectable()
export class AuthService {
    currentUser: IUser
    constructor(private http: Http) {

    }
    loginUser(userName: string, password: string) {
        this.currentUser = {
            id: 1,
            firstName: 'Akhilesh',
            lastName: 'Singh',
            userName: userName

        }

     
    }
loginUserAsyn(userName: string, password: string){
   let headers = new Headers({ 'content': 'application/json' })
        let requestOptions = new RequestOptions({ headers: headers })
        let loginDetails = { username: userName, password: password };

       return this.http.post('api/login', loginDetails, requestOptions).do(response => {
            if (response) {
                this.currentUser = <IUser>response.json();
            }
        }).catch(error =>{
            return Observable.of(false)
        })
}
    isAuthenticated() {
        return !!this.currentUser
    }
    updateCurrentUser(firstName: string, lastName: string) {
        this.currentUser.firstName = firstName
        this.currentUser.lastName = lastName

    }
}
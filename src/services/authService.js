import request from 'superagent'
import { accountsEndpoint, signupEndpoint, tokenEndpoint } from "../config"
import { userService } from './users';

/**
 * AuthService
 * @desc minimalist implementation, app-wide shared auth.
 * Service manages login, registration and token verification.
 */
class AuthService {
    constructor() {
        this.isAuthenticated = false;
        this.isAuthorized = false;
        this.sessionToken = localStorage.getItem('session_token');

        this.logIn = this.logIn.bind(this);
        this.isLoggedIn = this.isLoggedIn.bind(this);
    }

    isLoggedIn() {
        if (!this.sessionToken) return false;

        // TODO: how do we want to use this? returns object with token? token? boolean?
        return new Promise((res, rej) => {
            console.info('INFO', 'Checking session token ...');
                request.post(tokenEndpoint)
                    .set("Content-Type", "application/json")
                    .send({ auth_header: this.sessionToken })
                    .then(resp => {
                            console.log('INFO', resp.status);
                            if (resp.ok) {
                                this.isAuthorized = true;
                                return res(resp)
                            } else {
                                return rej(resp)
                            }
                        },
                        err => {
                            console.error(err);
                            return rej(err)
                        })
        })
    }

    logIn(userData) {
        return request.post(accountsEndpoint)
            .set("Content-Type", "application/json")
            .send(userData)
            .then((res) => {
                console.log('Successful login? ', res.ok, res.body);
                this.isAuthenticated = true;
                // TODO: Make sure res.body is a user object, not nested
                userService.refresh(res.body);
                return res.body
                // TODO: How many kinds of user auth needed? is a token returned?
                // this.sessionToken = res.body.token
                // this.isAuthorized = true;
            })
            .catch(err => console.error(err))
    };

    register(userData) {
        return request.post(signupEndpoint)
            .set("Content-Type", "application/json")
            .send(userData)
            .then((res) => {
                console.log('Successful signup? ', res.ok, res.body);
                this.isAuthenticated = true;
                return res.body
                // TODO: How many kinds of user auth needed? is a token returned?
                // this.sessionToken = res.body.token
                // this.isAuthorized = true;
            })
            .catch(err => console.error(err))
    };

    static sign(requestInProgress) {
        requestInProgress.set('Authorization', 'bearer ' + localStorage.getItem('session_token'));
    }

}

const auth = new AuthService();
export default auth;

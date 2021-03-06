import request from 'superagent'
import jwtDecode from 'jwt-decode';
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
        this.updateStore = this.updateStore.bind(this);
    }

    isLoggedIn() {
        // TODO: how do we want to use this? returns object with token? token? boolean?
        return new Promise((res, rej) => {
            console.info('INFO', 'Checking session token ...');
            if (!this.sessionToken) {
                request.post(tokenEndpoint)
                    .set("Content-Type", "application/json")
                    .then(resp => {
                            if (resp.ok) {
                                this.isAuthorized = true;
                                this.updateStore(resp.body.token);
                                return res(resp)
                            } else {
                                return rej(resp)
                            }
                        },
                        err => {
                            console.error(err);
                            return rej(err)
                        })
            } else {
                this.isAuthorized = true;
                return res(true)
            }
        })
    }

    updateStore(token) {
        localStorage.setItem('session_token', token);
        this.sessionToken = token;
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

    /**
     * @desc utility function for decoding tokens throughout the app
     * @param token
     */
    static decodeToken(token) {
        const payload = jwtDecode(token);
        // FIXME: accounts service returns email, but should return user_id. no PII
        // LINK: https://github.com/gSchool/rentalated-accounts/blob/master/src/app/models/user.py#L36
        localStorage.setItem('user', JSON.stringify(payload.userId));
    }

}

const auth = new AuthService();
export default auth;

import request from 'superagent'

import { accountsEndpoint, tokenEndpoint } from "../config"

class AuthService {
    constructor() {
        this.isAuthenticated = false;
        this.isAuthorized = false;
        this.sessionToken = localStorage.getItem('session_token');
    }

    isLoggedIn() {
        if (!this.sessionToken) return false;

        // TODO: how do we want to use this? returns object with token? token? boolean?
        return new Promise((res, rej) => {
            console.log("CHECKING SESSION TOKEN");
                request.post(tokenEndpoint)
                    .set("Content-Type", "application/json")
                    .send({ auth_header: this.sessionToken })
                    .then(resp => {
                            console.log("success response from token check", resp);
                            if (resp.ok) {
                                this.isAuthorized = true;
                                return res(resp)
                            } else {
                                return rej(resp)
                            }
                        },
                        err => {
                            console.log("error response from token check", err);
                            return rej(err)
                        })
        })
    }

    logIn(userData) {
        return request.post(accountsEndpoint)
            .set("Content-Type", "application/json")
            .send(userData)
            .then((res) => {
                console.log('Successful login: ', res.ok);
                this.isAuthenticated = true;
                // TODO: How many kinds of user auth needed?
                // this.isAuthorized = true;
            })
            .catch(err => console.error(err))
    };

    static sign(requestInProgress) {
        requestInProgress.set('Authorization', 'bearer ' + localStorage.getItem('session_token'));
    }

}

export default AuthService;

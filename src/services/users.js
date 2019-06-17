import request from 'superagent';
import { accountsEndpoint } from "../config";

export class UserService {
    constructor() {
        if (!localStorage.getItem('user')) {
            localStorage.setItem('user', JSON.stringify({}));
        }
        this.user = JSON.parse(localStorage.getItem('user'));
    }

    /**
     * @desc returns current user
     * @return {*}: object
     */
    get() {
        return this.user
    }

    /**
     * @desc update localStorage with most recent user data from API
     * @param userData
     */
    refresh(userData) {
        const user = this.get();
        Object.keys(userData).map(key => user[key] = userData[key]);
        localStorage.setItem('user', JSON.stringify(user));
    }

    /**
     * @desc send request to update user information
     * @param userData: object
     * @return Promise
     */
    update(userData) {
        return request.put(accountsEndpoint)
            .set('Content-Type', 'application/json')
            .send(userData)
            .then((res) => this.refresh(res.body) )
    }
}

export const userService = new UserService();

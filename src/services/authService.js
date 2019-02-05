import request from 'superagent'

import {accountsEndpoint, tokenEndpoint} from "../config"

export const isLoggedIn = () => new Promise((res,rej) => {
    console.log("CHECKING SESSION TOKEN")
    const sessionToken = localStorage.getItem("session_token")
    if (!sessionToken) {
        rej()
    }
    else {
        request.post(tokenEndpoint)
            .set("Content-Type", "application/json")
            .send({
                auth_header: sessionToken
            })
            .then(resp => {
                console.log("success response from token check", resp)
                if (resp.valid) {
                    return res(resp)
                }
                else {
                    return rej(resp)
                }
            },
            err => {
                console.log("error response from token check", err)
                return rej(err)
            })
    }
})

export const logIn = userData => {
    return request.post(`${accountsEndpoint}/api/login`)
        .set("Content-Type", "application/json")
        .send(userData)
}

export const sign = (requestInProgress) => requestInProgress.set('Authorization', 'bearer ' + localStorage.getItem('session_token'))

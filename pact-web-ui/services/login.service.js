const axios = require('axios');

class LoginService {
    constructor(baseUrl, port) {
        this.baseUrl = baseUrl;
        this.port = port;

    }

    logInUser(username, password) {
        return axios.request({
            method: 'POST',
            url: '/api/authentication/login',
            baseURL: `${this.baseUrl}:${this.port}`,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            data : {
                username: username,
                password: password
            }
        });
    }
}

export default LoginService;
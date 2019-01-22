import adapter from 'axios/lib/adapters/http';
const axios = require('axios');

class HeartbeatService {
    constructor(baseUrl, port) {
        this.baseUrl = baseUrl;
        this.port = port;
    }

    getHeartbeat() {
        return axios.request({
            method: 'GET',
            url: '/api/heartbeat',
            baseUrl: `${this.baseUrl}:${this.port}`,
            headers: {
                'Accept': 'application/json; charset=utf-8',
                'Content-Type': 'application/json; charset=utf-8'
            }
        }, adapter);
    }
}
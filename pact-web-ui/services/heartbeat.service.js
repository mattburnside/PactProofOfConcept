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
            baseURL: `${this.baseUrl}:${this.port}`,
            headers: {
                'Accept': 'application/json; charset=utf-8',
                'Content-Type': 'application/json; charset=utf-8'
            }
        });
    }
}

export default HeartbeatService;
'use strict'
import HeartbeatService from '../services/heartbeat.service'

describe("Heartbeat API", () => {
    let url = 'http://localhost';

    const EXPECTED_BODY = 'API is responding';
    const heartbeatService = new HeartbeatService(url, port);

    describe("functions as expected", () => {
        beforeEach(() => {
            const interaction = {
                uponReceiving: 'a GET request for a heartbeat',
                withRequest: {
                    method: 'GET',
                    path: '/api/heartbeat'
                },
                willRespondWith: {
                    status: 200,
                    headers: {
                        'Content-Type': 'text/plain; charset=utf-8'
                    },
                    body: EXPECTED_BODY
                }
            }
            return provider.addInteraction(interaction)
        })

        // add expectations
        it('returns response as expected', done => {
            return heartbeatService.getHeartbeat()
                .then(response => {
                    expect(response.headers['content-type']).toEqual('text/plain; charset=utf-8');
                    expect(response.data).toEqual(EXPECTED_BODY);
                    expect(response.status).toEqual(200);
                    done()
                })
                .then(() => provider.verify());
        })
    })
})
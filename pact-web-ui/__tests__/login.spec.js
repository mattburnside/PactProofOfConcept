'use strict';
import LoginService from '../services/login.service'
import HeartbeatService from "../services/heartbeat.service";

describe("Login API", () => {
    const url = 'http://localhost';
    const path = "/api/authentication/login";
    const loginService = new LoginService(url, port);

    afterEach(() => {
        return provider.verify()
    });

    // describe('functions as expected for invalid login', () => {
    //     beforeEach(() => {
    //         const interaction = {
    //             uponReceiving: 'an invalid login request',
    //             withRequest: {
    //                 method: 'POST',
    //                 path: path,
    //                 headers: {
    //                     'Accept': 'application/json',
    //                     'Content-Type': 'application/json'
    //                 },
    //                 body: {
    //                     "username" : "invalid",
    //                     "password" : "invalid"
    //                 }
    //             },
    //             willRespondWith: {
    //                 status: 401,
    //                 headers: {
    //                     'Content-Type': 'application/json; charset=utf-8'
    //                 }
    //             }
    //         };
    //         return provider.addInteraction(interaction)
    //     });
    //
    //     // add expectations
    //     it('invalid login returns expected response', done => {
    //         return loginService.logInUser('invalid', 'invalid')
    //             .then(response => {
    //                 expect(response.headers['content-type']).toEqual('application/json; charset=utf-8')
    //                 //expect(response.data).toEqual(EXPECTED_BODY)
    //                 expect(response.status).toEqual(401)
    //                 done()
    //             })
    //     })
    // })

    describe('functions as expected for valid login', () => {
        beforeEach(() => {
            const interaction = {
                uponReceiving: 'a valid login request',
                withRequest: {
                    method: 'POST',
                    path: path,
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: {
                        'username' : 'testuser',
                        'password' : 'testpassword'
                    }
                },
                willRespondWith: {
                    status: 200,
                    headers: {
                        'Content-Type': 'application/json; charset=utf-8'
                    },
                    body: {
                        'username' : 'testuser'
                    }
                }
            };
            return provider.addInteraction(interaction)
        });

        // add expectations
        it('valid login returns expected response', done => {
            return loginService.logInUser('testuser', 'testpassword')
                .then(response => {
                    expect(response.headers['content-type']).toEqual('application/json; charset=utf-8');
                    //expect(response.data).toEqual(EXPECTED_BODY)
                    expect(response.status).toEqual(200);
                    done()
                })
        })
    })
})

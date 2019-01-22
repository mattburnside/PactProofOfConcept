import HeartbeatService from './heartbeat.service';
import * as Pact from '@pact-foundation/pact';

describe('HeartbeatService API', () => {
   const heartbeatService = new HeartbeatService('http://localhost', global.port);

   describe('getHeartbeat()', () => {
      beforeEach((done) => {

      });

      it('sends a request according to contract', (done) => {

      });
   });
});
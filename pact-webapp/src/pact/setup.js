const path = require('path');
const Pact = require('@pact-foundation/pact').Pact;

global.port = 8991;
global.provider = new Pact({
    cors: true,
    port: global.port,
    log: path.resolve(process.cwd(), 'logs', 'pact.log'),
    logLevel: 'debug',
    dir: path.resolve(process.cwd(), 'pacts'),
    spec: 2,
    pactfileWriteMode: 'overwrite',
    consumer: 'webapp',
    provider: 'webapi'
});
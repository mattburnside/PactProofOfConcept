const path = require('path');
const Pact = require('@pact-foundation/pact').Pact;

global.port = 3001;
global.provider = new Pact({
    cors: true,
    port: global.port,
    log: path.resolve(process.cwd(), 'logs', 'pact.log'),
    logLevel: 'debug',
    dir: path.resolve(process.cwd(), 'pacts'),
    spec: 2,
    pactfileWriteMode: 'overwrite',
    consumer: 'webapp',
    provider: 'webapi',
    host: '127.0.0.1'
});
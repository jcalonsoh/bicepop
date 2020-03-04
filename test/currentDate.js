'use strict';

const mochaPlugin = require('serverless-mocha-plugin');
const expect = mochaPlugin.chai.expect;
let wrapped = mochaPlugin.getWrapper('currentTime', '/app/date.js', 'endpoint');

describe('currentdate', () => {
    before((done) => {
        done();
    });

    it('should return current date', () => {
        return wrapped.run({}).then((response) => {
            const body = JSON.parse(response.body);
            expect(response.statusCode).to.be.equal(200);
            expect(body.message).to.match(/.*\s(Sun|Mon|Tue|Wed|Thu|Fri|Sat)\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s[0-3]\d{1}\s\d{4}\./);
        });
    });
});


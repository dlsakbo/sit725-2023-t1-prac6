let expect = require('chai').expect;
let request = require('request');
let url = 'http://localhost:3000/api/fairway';
let fairway = {
    title: '',
    image: '',
    description: '',
    link: ''
};

describe('test GET api', function () {
    it('return status code of 200', function (done) {
        request(url, function (error, response, bodyString) {
            let bodyObj = JSON.parse(bodyString);
            expect(bodyObj.statusCode).to.equal(200);
            done();
        });
    });

});

describe('test POST api', function () {
    it('post fairway to DB', function (done) {
        request.post({ url: url, form: fairway }, function (a, response, bodyString) {
            let bodyObj = JSON.parse(bodyString);
            expect(response.statusCode).to.equal(200);
            done();
        });
    });
});


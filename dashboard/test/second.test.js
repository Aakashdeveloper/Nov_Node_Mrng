let chai = require('chai')
let chaiHttp = require('chai-http');
let expect = chai.expect;
chai.use(chaiHttp);


describe('Testing Rest Api',() => {
    it('Testing Getting user',(done) => {
        chai.request(`http://localhost:9900`)
        .get('/users')
        .then((res) => {
            expect(res).to.have.status(200);
            done();
        })
        .catch((err) => {
            throw err
        })
    })
    it('Testing Getting user',(done) => {
        chai.request(`http://localhost:9900`)
        .get('/user')
        .then((res) => {
            expect(res).to.have.status(404);
            done();
        })
        .catch((err) => {
            throw err
        })
    })

    it('Testing Post user',(done) => {
        chai.request(`http://localhost:9900`)
        .post('/addUser')
        .send({"_id":41,"name":"Kevin","city":"London","phone":188767678,"isActive":true})
        .then((res) => {
            expect(res).to.have.status(200);
            done();
        })
        .catch((err) => {
            throw err
        })
    })
});
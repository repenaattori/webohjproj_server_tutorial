let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
chai.use(chaiHttp);

//https://www.chaijs.com/plugins/chai-http/
//https://www.chaijs.com/guide/styles/

describe('/GET students', ()=>{
    it('Should get all students', (done) => {
        chai.request(server)
            .get('/student/all')
            .end((err,res) => {
                chai.expect(res).to.have.status(200);
                chai.expect(res.body).to.be.a('array');
                done();
            })
    })
    it('Should have first name', (done) => {
        chai.request(server)
            .get('/student/all')
            .end((err,res) => {
                
                chai.expect(res.body).to.be.an('array').and.length.greaterThan(0);
                chai.expect(res.body[0]).have.property('fname').with.equal('Reima');

                done();
            })
    })
})

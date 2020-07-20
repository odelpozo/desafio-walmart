let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../src/server');
const { expect } = require('chai');

chai.should();
chai.use(chaiHttp);

describe('foo API', () => {


    describe('GET /api/products', () => {

        it('Should GET all productos', (done) => {
            chai.request(server)
                .get('/api/products')
                .end((err, resp) => {
                    resp.should.have.status(200);
                    resp.body.should.be.a('array');
                done();    
                });
        })

        it('Should NOT GET all productos', (done) => {
            chai.request(server)
                .get('/api/produc')
                .end((err, resp) => {
                    resp.should.have.status(404);
                done();    
                });
        })
     })


})
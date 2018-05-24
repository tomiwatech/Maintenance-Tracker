import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../../index';

chai.use(chaiHttp);
chai.should();

describe('Users Controller', () => {

    /*
   * Test the /GET route
   */
    describe('/GET REQUEST', () => {
        it('it should GET all users requests', function (done) {
            chai.request(server)
                .get('/api/v1/users/requests/')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.have.property('responseMessage').to.equals('Successfully fetched all users requests');
                    res.body.should.have.property('responseCode').to.equals('00');
                    res.body.should.have.property('data').to.be.an('array');
                    done();
                });
        });

        it('it should GET user request by id specified', (done) => {
            chai.request(server)
                .get('/api/v1/users/requests/1')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.have.property('responseMessage').to.equals('Request found');
                    res.body.should.have.property('responseCode').to.equals('00');
                    res.body.should.have.property('data').to.be.an('object');
                    done();
                });
        });

        it('it should not GET user request because id is not found', function (done) {
            let requestId = 7;
            chai.request(server)
                .get(`/api/v1/users/requests/${requestId}`)
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.deep.equal({
                        responseCode: '01',
                        responseMessage: 'Request not found'
                    })
                    done();
                });
        });
    });

    /*
    * Test the /POST route
    */
    describe('/POST REQUEST', () => {
        it('it should make a post request if all fields are not empty ', (done) => {
            chai.request(server)
                .post('/api/v1/users/requests/')
                .send({
                    name: "finallize",
                    model: "hh",
                    description: "Best in town",
                    id: "3",
                    defect: "Faulty"
                })
                .end((err, res) => {
                    res.should.have.status(201);
                    res.body.should.be.deep.equal({
                        responseCode: '00',
                        responseMessage: 'New request created successfully'
                    })
                    done();
                });
        });

        it('it should not make a post request if some fields are empty ', (done) => {

            let body = {
                name: "",
                model: "hh",
                description: "",
                id: "2",
                defect: "Faulty"
            }

            chai.request(server)
                .post('/api/v1/users/requests/')
                .send(body)
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.deep.equal({
                        responseCode: '01',
                        responseMessage: 'Please fill all fields'
                    })
                    done();
                });
        });

        it('it should throw an error when you try to add duplicate data ', (done) => {

            const data = {};
            data.name = 'Sanni Mikolo';
            data.model = 'hello boy';
            data.description = 'i am not a nigerian developer';
            data.id = '2';
            data.defect = 'broken';

            chai.request(server)
                .post('/api/v1/users/requests/')
                .send(data)
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.deep.equal({
                        responseCode: '01',
                        responseMessage: 'Request Already Exists'
                    })
                    done();
                });
        });

    });

    /*
    * Test the /UPDATE route
    */
    describe('/UPDATE REQUEST', () => {
        it('it should update the request if request is not empty ', (done) => {

            let request = {
                name: "finallize",
                model: "hh",
                description: "Best in town",
                id: "3",
                defect: "Faulty"
            }

            chai.request(server)
                .put('/api/v1/users/requests/update')
                .send(request)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.deep.equal({
                        responseCode: '00',
                        responseMessage: 'User request details Updated',
                        data: {
                            name: "finallize",
                            model: "hh",
                            description: "Best in town",
                            id: "3",
                            defect: "Faulty"
                        }
                    })
                    done();
                });
        });

        it('it should not update the request if some request fields are empty ', (done) => {

            const request = {};
            request.name = '';
            request.model = '';
            request.description = 'Best in town';
            request.id = '';
            request.defect = '';

            chai.request(server)
                .put('/api/v1/users/requests/update')
                .send(request)
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.deep.equal({
                        responseCode: '01',
                        responseMessage: 'Please fill all fields'
                    })
                    done();
                });
        });

        it('it should not update the request if request does not exist in db in the first place ', (done) => {
            chai.request(server)
                .put('/api/v1/users/requests/update')
                .send({
                    name: "finallize",
                    model: "hh",
                    description: "Best in town",
                    id: "10",
                    defect: "Faulty"
                })
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.deep.equal({
                        responseCode: '01',
                        responseMessage: 'Request with this id is not found'
                    })
                    done();
                });
        });
    });

    /*
    * Test the /DELETE route
    */

    describe('/DELETE REQUEST', () => {

        it('it should delete user request by id specified', (done) => {
            let request = 3;
            chai.request(server)
                .delete(`/api/v1/users/requests/${request}`)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.have.property('responseMessage').to.equals('Request Deleted');
                    res.body.should.have.property('responseCode').to.equals('00');
                    res.body.should.have.property('data').to.be.an('array');
                    done();
                });
        });

        it('it should not delete user request because id is not found', (done) => {
            chai.request(server)
                .delete('/api/v1/users/requests/100')
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.deep.equal({
                        responseCode: '01',
                        responseMessage: 'Request Could not be deleted. ID not found'
                    })
                    done();
                });
        });
    });

});
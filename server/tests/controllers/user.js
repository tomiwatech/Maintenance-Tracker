import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../../index';
import UserController from '../../controllers/userController';

chai.use(chaiHttp);
chai.should();

describe('Users Controller', () => {

    /*
   * Test the /GET route
   */
    describe('/GET REQUEST', () => {
        it('it should GET all users requests', (done) => {
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
            let requestId = 1;
            chai.request(server)
                .get(`/api/v1/users/requests/${requestId}`)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.have.property('responseMessage').to.equals('User found');
                    res.body.should.have.property('responseCode').to.equals('00');
                    res.body.should.have.property('data').to.be.an('object');
                    done();
                });
        });

        it('it should not GET user request because id is not found', (done) => {
            let requestId = 7;
            chai.request(server)
                .get(`/api/v1/users/requests/${requestId}`)
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.deep.equal({
                        responseCode: '01',
                        responseMessage: 'User not found'
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
            let request = {
                name: "final",
                model: "hh",
                description: "Best in town",
                id: "3",
                defect: "Faulty"
            }
            chai.request(server)
                .post('/api/v1/users/requests/')
                .send(request)
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
            let request = {
                name: "",
                model: "hh",
                description: "",
                id: "2",
                defect: "Faulty"
            }
            chai.request(server)
                .post('/api/v1/users/requests/')
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

        it('it should throw an error when you try to add duplicate data ', (done) => {
            let request = {
                name: 'Sanni Mikolo',
                model: 'hello boy',
                desciption: 'i am not a nigerian developer',
                id: 2,
                defect: 'broken'
            }
            chai.request(server)
                .post('/api/v1/users/requests/')
                .send(request)
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.deep.equal({
                        responseCode: '01',
                        responseMessage: 'User Already Exists'
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
                        responseMessage: 'User details Updated',
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
            let request = {
                name: "",
                model: "",
                description: "Best in town",
                id: "",
                defect: "Faulty"
            }
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
            let request = {
                name: "finallize",
                model: "hh",
                description: "Best in town",
                id: "10",
                defect: "Faulty"
            }
            chai.request(server)
                .put('/api/v1/users/requests/update')
                .send(request)
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.deep.equal({
                        responseCode: '01',
                        responseMessage: 'User with id not found'
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
            chai.request(server)
                .delete('/api/v1/users/requests/3')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.have.property('responseMessage').to.equals('User Deleted');
                    res.body.should.have.property('responseCode').to.equals('00');
                    res.body.should.have.property('data').to.be.an('array');
                    done();
                });
        });

        it('it should not delete user request because id is not found', (done) => {
            chai.request(server)
                .delete('/api/v1/users/requests/7')
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.deep.equal({
                        responseCode: '01',
                        responseMessage: 'User Could not be deleted. ID not found'
                    })
                    done();
                });
        });
    });

});
import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../../index';

chai.use(chaiHttp);
chai.should();

describe('request Controller', () => {


    /**
     * TEST THE POST ROUTE
     * created_on, status, user_id, serial_number
     */
    describe('/POST REQUEST', () => {
        it('it should make a post request if all fields are not empty ', (done) => {
            chai.request(server)
                .post('/api/v2/users/requests/')
                .set('x-access-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiMTQiLCJpYXQiOjE1MjcyMjQ5ODQsImV4cCI6MTUyNzMxMTM4NH0.JDPmLkWDjND9RjbbR-CutnMhdeqvhIr0sQ1W1r8_sf0')
                .send({
                    requesttype: "Repair",
                    equipment: "Samsung Galazy",
                    model: "2019",
                    description: "Samsung model",
                    created_on: "2018-10-2: 11:12pm",
                    status: "pending",
                    serial_number: "9232"
                })
                .end((err, res) => {
                    res.should.have.status(201);
                    res.body.should.be.deep.equal({
                        message: 'New Request created successfully',
                    })
                    done();
                });
        });

        it('it should not make a post request if some fields are empty ', (done) => {

            let body = {
                requesttype: "",
                equipment: "",
                model: "2019",
                description: "Samsung model",
                created_on: "2018-10-2: 11:12pm",
                status: "",
                serial_number: "9232"
            }

            chai.request(server)
                .post('/api/v2/users/requests/')
                .set('x-access-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiMTQiLCJpYXQiOjE1MjcyMjQ5ODQsImV4cCI6MTUyNzMxMTM4NH0.JDPmLkWDjND9RjbbR-CutnMhdeqvhIr0sQ1W1r8_sf0')
                .send(body)
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.deep.equal({
                        message: 'Please fill all fields',
                    })
                    done();
                });
        });

        it('it should throw an error when you try to add duplicate data ', (done) => {

            const data = {};
                data.requesttype = "Repair",
                data.equipment = "Samsung Galazy",
                data.model = "2019",
                data.description = "Samsung model",
                data.created_on = "2018-10-2: 11:12pm",
                data.status = "pending",
                data.serial_number = "9232"

            chai.request(server)
                .post('/api/v2/users/requests/')
                .set('x-access-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiMTQiLCJpYXQiOjE1MjcyMjQ5ODQsImV4cCI6MTUyNzMxMTM4NH0.JDPmLkWDjND9RjbbR-CutnMhdeqvhIr0sQ1W1r8_sf0')
                .send(data)
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.deep.equal({
                        message: 'Request Already Exists',
                    })
                    done();
                });
        });

    });

    /*
   * Test the /GET route
   */
    describe('/GET REQUEST', () => {
        it('it should GET all users requests', function (done) {
            chai.request(server)
                .get('/api/v2/users/requests/')
                .set('x-access-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiMTQiLCJpYXQiOjE1MjcyMjQ5ODQsImV4cCI6MTUyNzMxMTM4NH0.JDPmLkWDjND9RjbbR-CutnMhdeqvhIr0sQ1W1r8_sf0')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.have.property('message').to.equals('Successfully fetched all users requests');
                    res.body.should.have.property('data').to.be.an('array');
                    done();
                });
        });

        it('it should GET user request by id specified', (done) => {
            chai.request(server)
                .get('/api/v2/users/requests/19')
                .set('x-access-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiMTQiLCJpYXQiOjE1MjcyMjQ5ODQsImV4cCI6MTUyNzMxMTM4NH0.JDPmLkWDjND9RjbbR-CutnMhdeqvhIr0sQ1W1r8_sf0')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.have.property('message').to.equals('Request Found');
                    res.body.should.have.property('data').to.be.an('array');
                    done();
                });
        });
    });

    /*
  * Test the /DELETE route
  */

    describe('/DELETE REQUEST', () => {

        it('it should delete user request by id specified', (done) => {
            let request = 8;
            chai.request(server)
                .delete(`/api/v2/users/requests/${request}`)
                .set('x-access-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiMTQiLCJpYXQiOjE1MjcyMjQ5ODQsImV4cCI6MTUyNzMxMTM4NH0.JDPmLkWDjND9RjbbR-CutnMhdeqvhIr0sQ1W1r8_sf0')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.have.property('message').to.equals('Request Deleted');
                    done();
                });
        });

        it('it should not delete user request because id is not found', (done) => {
            chai.request(server)
                .delete('/api/v2/users/requests/100')
                .set('x-access-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiMTQiLCJpYXQiOjE1MjcyMjQ5ODQsImV4cCI6MTUyNzMxMTM4NH0.JDPmLkWDjND9RjbbR-CutnMhdeqvhIr0sQ1W1r8_sf0')
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.deep.equal({
                        message: 'Error Deleting Request'
                    })
                    done();
                });
        });
    });

});
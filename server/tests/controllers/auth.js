import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../../index';

chai.use(chaiHttp);
chai.should();

describe('Authentication Controller', () => {

    /*
   * Test the /SIGNUP AND LOGIN
   */
    describe('/SIGNUP', () => {

        it('it SIGNUP A new user if one does not exists', (done) => {
            chai.request(server)
                .post('/api/v2/auth/signup')
                .send({
                    username: "Newboston",
                    password: "9999",
                    email: "test@gmail.com",
                    fullname: "TESTER"
                })
                .end((err, res) => {
                    res.should.have.status(201);
                    res.body.should.have.property('message').to.equals('New User created successfully');
                    done();
                });
        });

        it('it should not SIGNUP A new user if one does exists', (done) => {
            chai.request(server)
                .post('/api/v2/auth/signup')
                .send({
                    username: "Newboston",
                    password: "9999",
                    email: "test@gmail.com",
                    fullname: "TESTER"
                })
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.have.property('message').to.equals('User Already Exists');
                    done();
                });
        });

        it('it should not SIGNUP A new user if one of more fields are empty', (done) => {
            chai.request(server)
                .post('/api/v2/auth/signup')
                .send({
                    username: "",
                    password: "",
                    email: "test@gmail.com",
                    fullname: "TESTER"
                })
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.have.property('message').to.equals('Please fill all fields');
                    done();
                });
        });
    });

    describe('/LOGIN', () => {

        it('it LOGIN A new user if user exists', (done) => {
            chai.request(server)
                .post('/api/v2/auth/login')
                .send({
                    username: "Newboston",
                    password: "9999"
                })
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.have.property('message').to.equals('Authentication Successful');
                    res.body.should.have.property('token');
                    res.body.should.have.property('data').to.be.an('array');
                    done();
                });
        });

        it('it should not LOGIN A new user if username is wrong', (done) => {
            chai.request(server)
                .post('/api/v2/auth/login')
                .send({
                    username: "Newboston1111",
                    password: "9999"
                })
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.have.property('message').to.equals('Please Check Username and Password');
                    done();
                });
        });

        it('it should not LOGIN A new user if password is wrong', (done) => {
            chai.request(server)
                .post('/api/v2/auth/login')
                .send({
                    username: "Newboston",
                    password: "999922222222"
                })
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.have.property('message').to.equals('Please Check Username and Password');
                    done();
                });
        });

    });

});
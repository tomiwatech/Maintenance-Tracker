import chai  from 'chai';
import chaiHttp from 'chai-http';
import server from '../../index';
import UserController from '../../controllers/userController';

chai.use(chaiHttp);
chai.should();

describe('Users Controller Test', () => {

    describe('/GET Requests', () => {
        it('it should GET all the users', (done) => {
            chai.request(server)
                .get('/api/v1/users/requests/')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.have.property('data');
                    // res.body.should.have.statusCode('00');
                    done();
                });
        });
    });
    /*
    * Test the /POST route
    */
    // describe('/POST book', () => {
    //     it('it should not POST a book without pages field', (done) => {
    //         let book = {
    //             title: "The Lord of the Rings",
    //             author: "J.R.R. Tolkien",
    //             year: 1954
    //         }
    //         chai.request(server)
    //             .post('/book')
    //             .send(book)
    //             .end((err, res) => {
    //                 res.should.have.status(200);
    //                 res.body.should.be.a('object');
    //                 res.body.should.have.property('errors');
    //                 res.body.errors.should.have.property('pages');
    //                 res.body.errors.pages.should.have.property('kind').eql('required');
    //                 done();
    //             });
    //     });

    // });
});
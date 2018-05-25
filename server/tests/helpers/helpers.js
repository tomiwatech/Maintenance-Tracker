import chai from 'chai';
import UserhelperClass from '../../helpers/userdummy';
import dataStore from '../../dummy/dummy';

let assert = chai.assert;

describe('HELPER CLASSES', () => {

    /*
   * Test the User Helper class
   */
    describe('USER HELPER CLASS', () => {
        it('should return -1 once user request is not found in array', (done) => {
            let helper = UserhelperClass.findRequest(dataStore, 10);
            // expect(helper).to.be.equal(-1);
            assert.equal(helper, -1, 'Same Values');
            done();
        });

        it('should return position of user request in array which must always be greater than -1', (done) => {
            let helper = UserhelperClass.findRequest(dataStore, 1);
            assert.isAbove(helper, -1, `${helper} is greater than -1`);
            done();
        });

    });




});
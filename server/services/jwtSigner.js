import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import api from '../api';
import db from '../connection/connect';

api.set('superSecret', 'helloword');
/**
 * @exports
 * @class userController
 */
class JwtController {
/**
 * Creates a new request
 * @staticmethod
 * @param  {object} body - Request object
 * @param {object} user - Response object
 * @return {json} res.json
 */
static authenticateBcrypt(body, user) {
    const { id } = body;
    const position = UserhelperClass.findRequest(dataStore, id);
    if (position > -1) {
      return res.status(400).json({
        responseCode: '01',
        responseMessage: 'Request Already Exists',
      });
    }
    return res.status(201).json({
        responseCode: '00',
        responseMessage: 'New request created successfully',
    });
}

}

export default JwtController;

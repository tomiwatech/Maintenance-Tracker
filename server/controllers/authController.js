import bcrypt from 'bcrypt';
import authService from '../services/authService';
import db from '../connection/connect';

/**
 * @exports
 * @class authController
 */
class authController {
  /**
   * Creates a new request
   * @staticmethod
   * @param  {object} req - Request object
   * @param {object} res - Response object
   * @return {json} res.json
   */
  static signup(req, res) {
    const {
      email,
    } = req.body;
    authService.findByEmail(email).then((response) => {
      authService.saveUser(req.body).then((resulter) => {
        console.log('Saved');
        return res.status(201).json({
          responseCode: '00',
          responseMessage: 'New User created successfully',
        });
      }).then((err) => {
        console.log('Error Saving User');
        return res.status(400).json({
          responseCode: '01',
          responseMessage: 'Error Saving User',
        });
      });
    }).catch((err) => {
      console.log('User Already Exists');
      return res.status(400).json({
        responseCode: '01',
        responseMessage: 'User Already Exists',
      });
    });
  }
  /**
   * Creates a new request
   * @staticmethod
   * @param  {object} req - Request object
   * @param {object} res - Response object
   * @return {json} res.json
   */
  static login(req, res) {
    const { username, password } = req.body;
    authService.findByUsername(username).then((result) => {
      console.log('result', result);
      console.log(result.password);
      /**
   * Creates a new request
   * @staticmethod
   * @param  {object} req - Request object
   * @param {object} res - Response object
   * @return {json} res.json
   */
      function compareWithBcrypt() {
        const promise = new Promise((resolve, reject) => {
          // Load hash from your password DB.
          bcrypt.compare(password, result.password).then((response) => {
          // res == true
            if (response) {
              resolve('Password Matched');
            } else {
              reject(new Error('Password not matched'));
            }
          });
        });
        return promise;
      }
      compareWithBcrypt().then((response) => {
        console.log('password match');
        return res.status(200).json({
          responseCode: '00',
          responseMessage: 'Password Match',
        });
      }).catch((err) => {
        console.log('password not matched');
        return res.status(400).json({
          responseCode: '01',
          responseMessage: 'Please Check Username and Password',
        });
      });
    }).catch((error) => {
      console.log('User not found');
      return res.status(400).json({
        responseCode: '01',
        responseMessage: 'Please Check Username and Password',
      });
    });
  }

  /**
   * Get all requests
   *
   * @staticmethod
   * @param  {object} req - Request object
   * @param {object} res - Response object
   * @return {json} res.json
   */
  static getAll(req, res) {
    db.query('SELECT * from users').then((result) => {
      console.log(result.rowCount);
      return res.status(200).json({
        responseCode: '00',
        responseMessage: 'Successfully fetched all users requests',
        total: result.rowCount,
        data: result.rows,
      });
    }).catch((e) => {
      console.log(e);
      return res.status(200).json({
        responseCode: '00',
        responseMessage: 'Could not fetch all users',
      });
    });
  }
}

export default authController;

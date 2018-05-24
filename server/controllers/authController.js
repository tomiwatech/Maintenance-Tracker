import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import moment from 'moment';
import authService from '../services/authService';
import db from '../connection/connect';
import passwd from '../helpers/compare-password';

/**
 * @exports
 * @class authController
 */
class authController {
  /**
   * Creates a new new
   * @staticmethod
   * @param  {object} req - Request object
   * @param {object} res - Response object
   * @return {json} res.json
   */
  static userSignup(req, res) {
    const {
      email,
    } = req.body;
    authService.findUserByEmail(email).then((response) => {
      const d = new Date();
      const now = moment(d).format('YYYY-MM-DD HH:mm:ss');
      req.body.role = 'user';
      req.body.now = now;
      authService.saveUser(req.body).then((resulter) => {
        return res.status(201).json({
          responseCode: '00',
          responseMessage: 'New User created successfully',
        });
      }).then((err) => {
        return res.status(500).json({
          responseCode: '01',
          responseMessage: 'Error Saving User',
        });
      });
    }).catch((err) => {
      return res.status(400).json({
        responseCode: '01',
        responseMessage: 'User Already Exists',
      });
    });
  }
  /**
   * Login User
   * @staticmethod
   * @param  {object} req - Request object
   * @param {object} res - Response object
   * @return {json} res.json
   */
  static userLogin(req, res) {
    const { username, password } = req.body;
    authService.findUserByUsername(username, 'user').then((user) => {
      passwd.compare(password, user.password).then((response) => {
        const token = jwt.sign({ data: user }, 'user', {
          expiresIn: 86400, // expires in 24 hours
        });
        return res.status(200).json({
          responseCode: '00',
          responseMessage: 'Authentication Successful',
          data: user.data,
          token,
        });
      }).catch((err) => {
        return res.status(400).json({
          responseCode: '01',
          responseMessage: 'Please Check Username and Password',
        });
      });
    }).catch((error) => {
      return res.status(400).json({
        responseCode: '01',
        responseMessage: 'Please Check Username and Password',
      });
    });
  }
  /**
   * Creates a new admin
   * @staticmethod
   * @param  {object} req - Request object
   * @param {object} res - Response object
   * @return {json} res.json
   */
  static adminSignup(req, res) {
    const {
      email,
    } = req.body;
    authService.findAdminByEmail(email).then((response) => {
      const d = new Date();
      const now = moment(d).format('YYYY-MM-DD HH:mm:ss');
      req.body.role = 'admin';
      req.body.now = now;
      authService.saveUser(req.body).then((resulter) => {
        return res.status(201).json({
          responseCode: '00',
          responseMessage: 'New Admin created successfully',
        });
      }).then((err) => {
        return res.status(500).json({
          responseCode: '01',
          responseMessage: 'Error saving Admin',
        });
      });
    }).catch((err) => {
      return res.status(400).json({
        responseCode: '01',
        responseMessage: 'Admin Already Exists',
      });
    });
  }
  /**
   * Login Admin
   * @staticmethod
   * @param  {object} req - Request object
   * @param {object} res - Response object
   * @return {json} res.json
   */
  static adminLogin(req, res) {
    const { username, password } = req.body;
    authService.findAdminByUsername(username, 'admin').then((user) => {
      passwd.compare(password, user.password).then((response) => {
        const token = jwt.sign({ data: user }, 'admin', {
          expiresIn: 86400, // expires in 24 hours
        });
        return res.status(200).json({
          responseCode: '00',
          responseMessage: 'Authentication Successful',
          data: user.data,
          token,
        });
      }).catch((err) => {
        return res.status(400).json({
          responseCode: '01',
          responseMessage: 'Please Check Username and Password',
        });
      });
    }).catch((error) => {
      return res.status(400).json({
        responseCode: '01',
        responseMessage: 'Please Check Username and Password',
      });
    });
  }
}

export default authController;

import bcrypt from 'bcrypt';
import db from '../connection/connect';

const saltRounds = 10;
const obj = {};
const err = {};
/**
 * @exports
 * @class authService
 */
class authService {
  /**
   * Find user by email
   * @staticmethod
   * @param  {string} email - Request object
   * @return {string} res
   */
  static findUserByEmail(email) {
    const promise = new Promise((resolve, reject) => {
      const query = `SELECT username, password, email, fullname FROM users WHERE email = '${email}'`;
      db.query(query).then((result) => {
        if (result.rowCount === 0) {
          err.rowCount = 0;
          err.rows = [];
          resolve(err);
        } else if (result.rowCount >= 1) {
          obj.rowCount = result.rowCount;
          obj.rows = result.rows;
          reject(obj);
        }
      }).catch((e) => {
        err.rowCount = 0;
        err.rows = [];
        reject(err);
      });
    });

    return promise;
  }
  /**
   * Find admin by email
   * @staticmethod
   * @param  {string} email - Request object
   * @return {string} res
   */
  static findAdminByEmail(email) {
    const promise = new Promise((resolve, reject) => {
      const query = `SELECT username, password, email, fullname FROM users WHERE email = '${email}'`;
      db.query(query).then((result) => {
        if (result.rowCount === 0) {
          err.rowCount = 0;
          err.rows = [];
          resolve(err);
        } else if (result.rowCount >= 1) {
          obj.rowCount = result.rowCount;
          obj.rows = result.rows;
          resolve(obj);
        }
      }).catch((e) => {
        err.rowCount = 0;
        err.rows = [];
        reject(err);
      });
    });

    return promise;
  }
  /**
   * Find user by username
   * @staticmethod
   * @param  {string} username - Request object
  * @param  {string} role - Request object
   * @return {string} res
   */
  static findUserByUsername(username, role) {
    const promise = new Promise((resolve, reject) => {
      const query = `SELECT username, password, email, fullname FROM users WHERE username = '${username}' AND role = '${role}'`;
      db.query(query).then((result) => {
        if (result.rowCount === 0) {
          err.rowCount = 0;
          err.rows = [];
          reject(err);
        } else if (result.rowCount >= 1) {
          obj.data = result.rows;
          obj.rowCount = result.rowCount;
          obj.password = result.rows[0].password;
          resolve(obj);
        }
      }).catch((e) => {
        err.rowCount = 0;
        err.rows = [];
        reject(err);
      });
    });

    return promise;
  }
  /**
   * Find admin by username
   * @staticmethod
   * @param  {string} username - Request object
   * @param  {string} role - Request object
   * @return {string} res
   */
  static findAdminByUsername(username, role) {
    const promise = new Promise((resolve, reject) => {
      const query = `SELECT username, password, email, fullname FROM users WHERE username = '${username}' AND role = '${role}'`;
      db.query(query).then((result) => {
        if (result.rowCount === 0) {
          err.rowCount = 0;
          err.rows = [];
          reject(err);
        } else if (result.rowCount === 1) {
          obj.data = result.rows;
          obj.rowCount = result.rowCount;
          obj.password = result.rows[0].password;
          resolve(obj);
        }
      }).catch((e) => {
        err.rowCount = 0;
        err.rows = [];
        reject(err);
      });
    });

    return promise;
  }
  /**
   * save new user 
   * @staticmethod
   * @param  {string} body - Request object
   * @return {string} res
   */
  static saveUser(body) {
    const {
      username, password, email, fullname, role, now,
    } = body;

    const promise = new Promise((resolve, reject) => {
      bcrypt.hash(password, saltRounds).then((hash) => {
        const queryBody = `INSERT INTO users (username,password,email,fullname,created_on,role) VALUES ('${username}', '${hash}', '${email}', '${fullname}','${now}','${role}')`;
        db.query(queryBody).then((result) => {
          if (result.rowCount >= 1) {
            resolve('Data Saved');
          } else if (result.rowCount === 0) {
            reject(new Error('Not Saved'));
          }
        }).catch((e) => {
          reject(new Error('Could not save User'));
        });
      });
    });

    return promise;
  }
}

export default authService;

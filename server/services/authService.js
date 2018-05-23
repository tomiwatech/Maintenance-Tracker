import bcrypt from 'bcrypt';
import db from '../connection/connect';

const saltRounds = 10;
const obj = {};
const err = {};
/**
 * @exports
 * @class userController
 */
class authService {
  /**
   * Check username and password
   * @staticmethod
   * @param  {string} email - Request object
   * @return {string} res
   */
  static findByEmail(email) {
    const promise = new Promise((resolve, reject) => {
      const query = `SELECT username, password, email, fullname FROM users WHERE email = '${email}'`;
      db.query(query).then((result) => {
        console.log('found ', result);
        if (result.rowCount === 0) {
          err.rowCount = 0;
          err.rows = [];
          resolve(err);
        } else if (result.rowCount === 1) {
          obj.rowCount = result.rowCount;
          obj.rows = result.rows;
          reject(obj);
        }
      }).catch((e) => {
        err.rowCount = 0;
        err.rows = [];
        reject(err);
        console.log('hello hh ', e);
      });
    });

    return promise;
  }
  /**
   * Check username and password
   * @staticmethod
   * @param  {string} username - Request object
   * @return {string} res
   */
  static findByUsername(username) {
    const promise = new Promise((resolve, reject) => {
      const query = `SELECT username, password, email, fullname FROM users WHERE username = '${username}'`;
      db.query(query).then((result) => {
        if (result.rowCount === 0) {
          err.rowCount = 0;
          err.rows = [];
          resolve(err);
        } else if (result.rowCount === 1) {
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
   * Check username and password
   * @staticmethod
   * @param  {string} body - Request object
   * @return {string} res
   */
  static saveUser(body) {
    const {
      username, password, email, fullname, createdOn,
    } = body;

    const promise = new Promise((resolve, reject) => {
      bcrypt.hash(password, saltRounds).then((hash) => {
        console.log('hash', hash);
        const queryBody = `INSERT INTO users (username,password,email,fullname,created_on) VALUES ('${username}', '${hash}', '${email}', '${fullname}','${createdOn}')`;
        db.query(queryBody).then((result) => {
          console.log('saving ', result);
          if (result.rowCount === 1) {
            resolve('Data Saved');
          } else if (result.rowCount === 0) {
            reject(new Error('Not Saved'));
          }
        }).catch((e) => {
          console.log('hello', e);
          reject(new Error('Could not save User'));
        });
      });
    });

    return promise;
  }
}

export default authService;

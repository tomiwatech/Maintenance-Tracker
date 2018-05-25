import db from '../connection/connect';

const obj = {};
const err = {};
/**
 * @exports
 * @class adminService
 */
class adminService {
  /**
   * Approve request by id
   * @staticmethod
   * @param  {string} id - Request object
   * @return {string} res
   */
  static approveById(id) {
    const promise = new Promise((resolve, reject) => {
      const query = `UPDATE requests SET status = 'approved' WHERE id = '${id}' AND status = 'pending'`;
      db.query(query).then((result) => {
        if (result.rowCount === 0) {
          err.rowCount = 0;
          err.rows = [];
          reject(err);
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
   * Disapprove request by id
   * @staticmethod
   * @param  {string} id - Request object
   * @return {string} res
   */
  static disapproveById(id) {
    const promise = new Promise((resolve, reject) => {
      const query = `UPDATE requests SET status = 'disapproved' WHERE id = '${id}' AND status = 'pending'`;
      db.query(query).then((result) => {
        if (result.rowCount === 0) {
          err.rowCount = 0;
          err.rows = [];
          reject(err);
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
   * Resolve request by id
   * @staticmethod
   * @param  {string} id - Request object
   * @return {string} res
   */
  static resolveById(id) {
    const promise = new Promise((resolve, reject) => {
      const query = `UPDATE requests SET status = 'resolved' WHERE id = '${id}' AND status = 'approved'`;
      db.query(query).then((result) => {
        if (result.rowCount === 0) {
          err.rowCount = 0;
          err.rows = [];
          reject(err);
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
   * Get all requests for users
   * @staticmethod
   * @param  {string} id - Request object
   * @return {string} res
   */
  static getAllRequests() {
    const promise = new Promise((resolve, reject) => {
      const query = 'SELECT * FROM requests';
      db.query(query).then((result) => {
        if (result.rowCount === 0) {
          err.rowCount = 0;
          err.rows = [];
          reject(err);
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
}

export default adminService;

import db from '../connection/connect';

const obj = {};
const err = {};
/**
 * @exports
 * @class requestService
 */
class requestService {
  /**
   * Find request by equipment
   * @staticmethod
   * @param  {string} equipment - Request object
   * @return {string} res
   */
  static findRequestByEquipment(equipment) {
    const promise = new Promise((resolve, reject) => {
      const query = `SELECT requesttype, equipment, model, approve, disapprove, resolve FROM requests WHERE equipment = '${equipment}'`;
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
   * Find request by id
   * @staticmethod
   * @param  {string} id - Request object
   * @return {string} res
   */
  static findRequestById(id) {
    const promise = new Promise((resolve, reject) => {
      const query = `SELECT requesttype, equipment, model,description, created_on, approve, disapprove, resolve FROM requests WHERE id = '${id}'`;
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
   * delete request by id
   * @staticmethod
   * @param  {string} id - Request object
   * @return {string} res
   */
  static deleteRequestById(id) {
    const promise = new Promise((resolve, reject) => {
      const query = `DELETE FROM requests WHERE id = '${id}'`;
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
 * update request by body
 * @staticmethod
 * @param  {string} body - Request object
 * @return {string} res
 */
  static updateRequestById(body) {
    const {
      id, requesttype, equipment, model, description, now, approve, disapprove, resolvve,
    } = body;
    const promise = new Promise((resolve, reject) => {
      const query = `UPDATE requests SET requesttype = '${requesttype}', equipment = '${equipment}' ,  model = '${model}',  description = '${description}',  created_on = '${now}',  approve = '${approve}',  disapprove = '${disapprove}',  resolve = '${resolvve}'  WHERE id = '${id}'`;
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
   * save new requests
   * @staticmethod
   * @param  {string} body - Request object
   * @return {string} res
   */
  static saveRequest(body) {
    const {
      requesttype, equipment, model, description, now, approve, disapprove, resolvve,
    } = body;
    const promise = new Promise((resolve, reject) => {
      const queryBody = `INSERT INTO requests (requesttype, equipment, model,description, created_on, approve, disapprove, resolve) VALUES ('${requesttype}', '${equipment}', '${model}', '${description}','${now}','${approve}','${disapprove}','${resolvve}')`;
      db.query(queryBody).then((result) => {
        if (result.rowCount === 1) {
          resolve('Data Saved');
        } else if (result.rowCount === 0) {
          reject(new Error('Not Saved'));
        }
      }).catch((e) => {
        reject(new Error('Could not save Request'));
      });
    });
    return promise;
  }
  /**
   * Get all requests
   * @staticmethod
   * @param  {string} id
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

export default requestService;

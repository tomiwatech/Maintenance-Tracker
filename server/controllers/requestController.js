import moment from 'moment';
import requestService from '../services/requestService';

/**
 * @exports
 * @class requestController
 */
class requestController {
  /**
   * Creates a new request
   * @staticmethod
   * @param  {object} req - Request object
   * @param {object} res - Response object
   * @return {json} res.json
   */
  static create(req, res) {
    const {
      equipment,
    } = req.body;
    requestService.findRequestByEquipment(equipment).then((response) => {
      const d = new Date();
      const now = moment(d).format('YYYY-MM-DD HH:mm:ss');
      req.body.now = now;
      req.body.approve = 'pending';
      req.body.disapprove = false;
      req.body.resolvve = false;
      requestService.saveRequest(req.body).then((resulter) => {
        return res.status(201).json({
          responseCode: '00',
          responseMessage: 'New Request created successfully',
        });
      }).then((err) => {
        return res.status(500).json({
          responseCode: '01',
          responseMessage: 'Error Saving Request',
        });
      });
    }).catch((err) => {
      return res.status(400).json({
        responseCode: '01',
        responseMessage: 'Request Already Exists',
      });
    });
  }
  /**
   * Find request by id
   * @staticmethod
   * @param  {object} req - Request object
   * @param {object} res - Response object
   * @return {json} res.json
   */
  static findOne(req, res) {
    const { id } = req.params;
    requestService.findRequestById(id).then((response) => {
      return res.status(200).json({
        responseCode: '00',
        responseMessage: 'Request Found',
        data: response.rows,
      });
    }).catch((err) => {
      return res.status(400).json({
        responseCode: '01',
        responseMessage: 'Request Not found',
      });
    });
  }
  /**
   * Delete request by id
   * @staticmethod
   * @param  {object} req - Request object
   * @param {object} res - Response object
   * @return {json} res.json
   */
  static deleteOne(req, res) {
    const { id } = req.params;
    requestService.deleteRequestById(id).then((response) => {
      return res.status(200).json({
        responseCode: '00',
        responseMessage: 'Request Deleted',
      });
    }).catch((err) => {
      return res.status(400).json({
        responseCode: '01',
        responseMessage: 'Error Deleting Request',
      });
    });
  }
  /**
   * Update request by id
   * @staticmethod
   * @param  {object} req - Request object
   * @param {object} res - Response object
   * @return {json} res.json
   */
  static updateOne(req, res) {
    requestService.updateRequestById(req.body).then((response) => {
      return res.status(200).json({
        responseCode: '00',
        responseMessage: 'Request Updated',
        data: response.rows,
      });
    }).catch((err) => {
      return res.status(400).json({
        responseCode: '01',
        responseMessage: 'Error Updating Request',
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
    requestService.getAllRequests().then((result) => {
      return res.status(200).json({
        responseCode: '00',
        responseMessage: 'Successfully fetched all users requests',
        total: result.rowCount,
        data: result.rows,
      });
    }).catch((e) => {
      return res.status(400).json({
        responseCode: '00',
        responseMessage: 'Could not fetch all users',
      });
    });
  }
}

export default requestController;

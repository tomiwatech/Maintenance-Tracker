import adminService from '../services/adminService';

/**
 * @exports
 * @class adminController
 */
class adminController {
  /**
   * Approve request by id
   * @staticmethod
   * @param  {object} req - Request object
   * @param {object} res - Response object
   * @return {json} res.json
   */
  static approveOne(req, res) {
    const { id } = req.params;
    adminService.approveById(id).then((response) => {
      return res.status(200).json({
        message: 'Request Approved',
      });
    }).catch((err) => {
      return res.status(400).json({
        message: 'Request could not be approved',
      });
    });
  }
  /**
   * Disapprove a request by id
   * @staticmethod
   * @param  {object} req - Request object
   * @param {object} res - Response object
   * @return {json} res.json
   */
  static disapproveOne(req, res) {
    const { id } = req.params;
    adminService.disapproveById(id).then((response) => {
      return res.status(200).json({
        message: 'Request Disapproved',
      });
    }).catch((err) => {
      return res.status(400).json({
        message: 'Unable to Disapprove Request',
      });
    });
  }
  /**
   * Resolve a request by id
   * @staticmethod
   * @param  {object} req - Request object
   * @param {object} res - Response object
   * @return {json} res.json
   */
  static resolveOne(req, res) {
    const { id } = req.params;
    adminService.resolveById(id).then((response) => {
      return res.status(200).json({
        message: 'Request Resolved',
      });
    }).catch((err) => {
      return res.status(400).json({
        message: 'Unable to Reslove Request',
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
    adminService.getAllRequests().then((result) => {
      return res.status(200).json({
        message: 'Successfully fetched all users requests',
        total: result.rowCount,
        data: result.rows,
      });
    }).catch((e) => {
      return res.status(400).json({
        message: 'Could not fetch all users',
      });
    });
  }
}

export default adminController;

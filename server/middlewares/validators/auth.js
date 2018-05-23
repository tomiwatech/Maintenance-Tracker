/**
 * @exports
 * @class authMiddleware
 */
class authMiddleware {
/**
 * authMiddleware
 *
 * @staticmethod
 * @param  {object} req - Request object
 * @param {object} res - Response object
 * @param {function} next - middleware next (for error handling)
 * @return {json} res.json
 */
  static validateSignup(req, res, next) {
    const {
      username, password, email, fullname, createdOn,
    } = req.body;
    if (username.trim() === '' || password.trim() === '' || email.trim() === '' || fullname.trim() === '' || createdOn.trim() === '') {
      return res.status(400).json({
        responseCode: '01',
        responseMessage: 'Please fill all fields',
      });
    }
    next();
  }
  /**
 *authMiddleware
 *
 * @staticmethod
 * @param  {object} req - Request object
 * @param {object} res - Response object
 * @param {function} next - middleware next (for error handling)
 * @return {json} res.json
 */
  static validateLogin(req, res, next) {
    const { username, password } = req.body;
    if (username.trim() === '' || password.trim() === '') {
      return res.status(400).json({
        responseCode: '01',
        responseMessage: 'Please fill all fields',
      });
    }
    next();
  }
}

export default authMiddleware;

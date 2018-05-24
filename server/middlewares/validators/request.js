import jwt from 'jsonwebtoken';
/**
 * @exports
 * @class requestMiddleware
 */
class requestMiddleware {
  /**
     * requestMiddleware
     * Validate POST BODY
     * @staticmethod
     * @param  {object} req - Request object
     * @param {object} res - Response object
     * @param {function} next - middleware next (for error handling)
     * @return {json} res.json
     */
  static validatePostBody(req, res, next) {
    const {
      requesttype, equipment, model, description,
    } = req.body;
    if (requesttype.trim() === '' || model.trim() === '' || description.trim() === '' || equipment.trim() === '') {
      return res.status(400).json({
        responseCode: '01',
        responseMessage: 'Please fill all fields',
      });
    }
    next();
  }
  /**
     * requestMiddleware
     * VERIFY TOKEN
     * @staticmethod
     * @param  {object} req - Request object
     * @param {object} res - Response object
     * @param {function} next - middleware next (for error handling)
     * @return {json} res.json
     */
  static verifyToken(req, res, next) {
    // check header or url parameters or post parameters for token
    const token = req.body.token || req.headers['x-access-token'];

    // decode token
    if (token) {
      // verifies secret and checks exp
      jwt.verify(token, 'user', (err, decoded) => {
        if (err) {
          return res.json({ status: false, message: 'Failed to authenticate token.' });
        }
        // if everything is good, save to request for use in other routes
        req.decoded = decoded;
        next();
      });
    } else {
      // if there is no token
      // return an error
      return res.status(403).send({
        status: false,
        message: 'No token provided.',
      });
    }
  }
}
export default requestMiddleware;

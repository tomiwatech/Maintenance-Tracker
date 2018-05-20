/**
 * @exports
 * @class userMiddlewareValidator
 */
class UserMiddlewareValidator {
  /**
   * UserMiddlewareValidator
   *
   * @staticmethod
   * @param  {object} req - Request object
   * @param {object} res - Response object
   * @param {function} next - middleware next (for error handling)
   * @return {json} res.json
   */
  static validatePostBody(req, res, next) {
    const {
      name, model, description, id, defect,
    } = req.body;
    if (name.trim() === '' || model.trim() === '' || description.trim() === '' || id.trim() === '' || defect.trim() === '') {
      return res.status(400).json({
        responseCode: '01',
        responseMessage: 'Please fill all fields',
      });
    }
    next();
  }
}

export default UserMiddlewareValidator;

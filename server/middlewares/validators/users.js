class UserMiddlewareValidator {
  static validatePostBody(req, res, next) {
    const {
      name, model, desciption, id, defect
    } = req.body;
    if (name === '' || model === '' || desciption === '' || id === '' || defect === '') {
      return res.status(400).json({
        responseCode: '01',
        responseMessage: 'Please fill all fields'
      });
    }
    next();
  }

  static validateGetId(req, res, next) {
    const {
      id
    } = req.params;
    if (typeof (id) !== 'string') {
      return res.status(400).json({
        responseCode: '01',
        responseMessage: 'Please enter request ID'
      });
    }
    next();
  }
}

export default UserMiddlewareValidator;

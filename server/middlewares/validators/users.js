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
}

export default UserMiddlewareValidator;

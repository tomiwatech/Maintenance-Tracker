class UserMiddlewareValidator {
  static validatePostBody(req, res, next) {
    const {
      name, model, description, id, defect
    } = req.body;
    if (name.trim() === '' || model.trim() === '' || description.trim() === '' || id.trim() === '' || defect.trim() === '') {
      return res.status(400).json({
        responseCode: '01',
        responseMessage: 'Please fill all fields'
      });
    }
    next();
  }
}

export default UserMiddlewareValidator;

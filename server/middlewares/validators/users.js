class UserMiddlewareValidator {
  static validatePostBody(req, res, next) {
    if (req.body.name === '' || req.body.model === '' || req.body.desciption === '' || req.body.id === '' || req.body.defect === '') {
      return res.status(400).json({
        responseCode: '01',
        responseMessage: 'Please fill all fields'
      });
    }
    next();
  }
}

export default UserMiddlewareValidator;

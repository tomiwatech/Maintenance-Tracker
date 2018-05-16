// import { check, validationResult } from 'express-validator/check';
// import matchedData from 'express-validator/filter';


// class validateController {
//   /**
//      * Update an existing meal
//      *
//      * @staticmethod
//      * @param  {object} req - Request object
//      * @param {object} res - Response object
//      * @param {function} next - middleware next (for error handling)
//      * @return {json} res.json
//      */
//   static validate(req, res, next) {
//     console.log(req.body);
//     check('name').exists(),
//     check('model').exists(),
//     check('description').exists(),
//     check('defect').exists();

//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(422).json({ errors: errors.mapped() });
//     }

//     // matchedData returns only the subset of data validated by the middleware
//     const user = matchedData(req);
//     return res.status(201).json({
//       status: 'welcome',
//       statusCode: '00'
//     });
//   }
// }

// export default validateController;


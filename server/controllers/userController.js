/**
 * @exports
 * @class UserController
 * @constructor
 */
class UserController {
  /**
 * @class UserController
 * @constructor
 */
  constructor() {
    this.dataStore = [];
  }

  /**
   * Creates a new request
   * @staticmethod
   * @param  {object} req - Request object
   * @param {object} res - Response object
   * @param {function} next - middleware next (for error handling)
   * @return {json} res.json
   */
  static create(req, res, next) {
    this.dataStore.push(req.body);
    return res.status(201).json({
      statusCode: '00',
      statusMessage: 'New request created successfully'
    });
  }

  /**
    * Deletes a request
    *
    * @staticmethod
    * @param  {object} req - Request object
    * @param {object} res - Response object
    * @param {function} next - middleware next (for error handling)
    * @return {json} res.json
    */
  static deleteOne(req, res, next) {
    const foundAt = this.find();
    if (foundAt > -1) {
      this.dataStore.splice(foundAt, 1);
      this.dataStore.pop();
      return true;
    }
  }

  /**
   * Return request that match requestId
   *
   * @staticmethod
   * @param  {object} req - Request object
   * @param {object} res - Response object
   * @param {function} next - middleware next (for error handling)
   * @return {json} res.json
   */
  static findById(req, res, next) {
    const { id } = req.params.id;
    for (let i = 0; i < this.dataStore.length; i += 1) {
      if (this.dataStore[i].id === id) {
        return res.status(200).json({
          statusCode: '00',
          statusMessage: 'User found',
          data: this.dataStore[i]
        });
      }
    }

    return res.status(404).json({
      statusCode: '04',
      statusMessage: 'User not found'
    });
  }

  /**
   * Get all requests
   *
   * @staticmethod
   * @param  {object} req - Request object
   * @param {object} res - Response object
   * @param {function} next - middleware next (for error handling)
   * @return {json} res.json
   */
  static getAll(req, res, next) {
    return res.status(200).json({
      statusCode: '00',
      statusMessage: 'Successfully fetched all users requests',
      data: this.dataStore
    });
  }


  /**
  * Deletes a request
  *
  * @staticmethod
  * @param  {object} req - Request object
  * @param {object} res - Response object
  * @param {function} next - middleware next (for error handling)
  * @return {json} res.json
  */
  static deleteAll(req, res, next) {
    this.dataStore.length = 0;
    return res.status(200).json({
      statusCode: '00',
      statusMessage: 'Data Source Emptied Successfully',
      data: this.dataStore
    });
  }


  /**
   * Update an existing request
   *
   * @staticmethod
   * @param  {object} req - Request object
   * @param {object} res - Response object
   * @param {function} next - middleware next (for error handling)
   * @return {number} position of element
   */
  static updateOne(req, res, next) {
    /**
   * @param   {number} id the second number
   * @returns {number} the sum of a and b
   */
    function find(id) {
      for (let i = 0; i < this.dataStore.length; i += 1) {
        if (this.dataStore[i].id === id) {
          return i;
        }
      }

      return -1;
    }

    const {
      id, name, model, desciption, defect
    } = req.body;
    const foundOne = find(id);
    if (foundOne > -1) {
      for (let i = 0; i < this.dataStore.length; i += 1) {
        if (this.dataStore[i].id === id) {
          this.dataStore[i].id = id;
          this.dataStore[i].name = name;
          this.dataStore[i].model = model;
          this.dataStore[i].desciption = desciption;
          this.dataStore[i].defect = defect;

          return res.status(200).json({
            statusCode: '00',
            statusMessage: 'Updated',
            data: this.dataStore[i]
          });
        }
      }
    }

    return res.status(400).json({
      statusCode: '00',
      statusMessage: 'User with id not found'
    });
  }
}

export default UserController;

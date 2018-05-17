import UserhelperClass from '../helpers/users/user';
import dataStore from '../dummy/dummy';

class UserController {
  static create(req, res) {
    const { id } = req.body;
    const position = UserhelperClass.findUser(dataStore, id);
    if (position > -1) {
      return res.status(400).json({
        responseCode: '01',
        responseMessage: 'User Already Exists'
      });
    }
    dataStore.push(req.body);
    return res.status(201).json({
      responseCode: '00',
      responseMessage: 'New request created successfully'
    });
  }

  static deleteOne(req, res) {
    const { id } = req.params;
    const position = UserhelperClass.findUser(dataStore, id);
    if (position > -1) {
      dataStore.splice(position, 1);
      return res.status(200).json({
        responseCode: '00',
        responseMessage: 'User Deleted',
        data: dataStore
      });
    }
    return res.status(400).json({
      responseCode: '01',
      responseMessage: 'User Could not be deleted. ID not found'
    });
  }

  static findById(req, res) {
    const { id } = req.params;
    const position = UserhelperClass.findUser(dataStore, id);
    if (position > -1) {
      return res.status(200).json({
        responseCode: '00',
        responseMessage: 'User found',
        data: dataStore[position]
      });
    }

    return res.status(400).json({
      responseCode: '01',
      responseMessage: 'User not found'
    });
  }

  static getAll(req, res) {
    return res.status(200).json({
      responseCode: '00',
      responseMessage: 'Successfully fetched all users requests',
      data: dataStore
    });
  }

  static deleteAll(req, res) {
    dataStore.length = 0;
    return res.status(200).json({
      responseCode: '00',
      responseMessage: 'Data Source Emptied Successfully',
      data: dataStore
    });
  }

  static updateOne(req, res) {
    const {
      name, model, desciption, id, defect
    } = req.body;
    const position = UserhelperClass.findUser(dataStore, id);
    if (position > -1) {
      dataStore[position].id = id;
      dataStore[position].name = name;
      dataStore[position].model = model;
      dataStore[position].desciption = desciption;
      dataStore[position].defect = defect;
      return res.status(200).json({
        responseCode: '00',
        responseMessage: 'User details Updated',
        data: dataStore[position]
      });
    }
    return res.status(400).json({
      responseCode: '01',
      responseMessage: 'User with id not found'
    });
  }
}

export default UserController;

/**
 * @exports
 * @class UserhelperClass
 */
class UserhelperClass {
  /**
   * Userhelper Class
   * @staticmethod
   * @param  {array} dataStore - Request object
   * @param {number} id - Response object
   * @return {number} a
   */
  static findUser(dataStore, id) {
    for (let i = 0; i < dataStore.length; i += 1) {
      if (Number(dataStore[i].id) === Number(id)) {
        return i;
      }
    }
    return -1;
  }
}
export default UserhelperClass;

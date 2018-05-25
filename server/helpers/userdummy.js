/**
 * @exports
 * @class UserhelperClass
 */
class UserhelperClass {
/**
 * Userhelper Class
 * @staticmethod
 * @param  {array} dataStore
 * @param {number} id
 * @return {number} i
 */
  static findRequest(dataStore, id) {
    for (let i = 0; i < dataStore.length; i += 1) {
      if (Number(dataStore[i].id) === Number(id)) {
        return i;
      }
    }
    return -1;
  }
}
export default UserhelperClass;

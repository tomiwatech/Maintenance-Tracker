import bcrypt from 'bcrypt';

/**
 * @exports
 * @class comparePassword
 */
class comparePassword {
/**
 * Userhelper Class
 * @staticmethod
 * @param  {string} newpassword
 * @param {string} dbpassword
 * @return {number} a
 */
  static compare(newpassword, dbpassword) {
    const promise = new Promise((resolve, reject) => {
    // Load hash from your password DB.
      console.log(newpassword, dbpassword);
      bcrypt.compare(newpassword, dbpassword).then((response) => {
        console.log(response);
        // res == true
        if (response) {
          resolve('Password Matched');
        } else {
          reject(new Error('Password not matched'));
        }
      });
    });
    return promise;
  }
}
export default comparePassword;

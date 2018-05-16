class UserhelperClass {
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

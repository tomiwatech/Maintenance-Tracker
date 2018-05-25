import dotenv from 'dotenv';

dotenv.config();

const config = {
  userSecret: process.env.JWT_USER_KEY,
  adminSecret: process.env.JWT_ADMIN_KEY,
  liveDB: process.env.LIVE_DB,
  testDB: process.env.TEST_DB,
};
export default config;

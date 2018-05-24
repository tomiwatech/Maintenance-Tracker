import dotenv from 'dotenv';

dotenv.config();

const config = {
  userSecret: process.env.JWT_USER_KEY,
  adminSecret: process.env.JWT_ADMIN_KEY,
};
export default config;

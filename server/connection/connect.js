import { Client } from 'pg';

const connectionString = 'postgres://mwjytycq:x3Q4p4x3nTVugrUk10pxm1VE_Flz9XU7@stampy.db.elephantsql.com:5432/mwjytycq';

const client = new Client({
  connectionString,
});

client.connect();

export default client;

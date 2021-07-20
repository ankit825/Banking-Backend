

const env = {
  database: 'd71mnjma6jqi1p',
  username: 'pmkyihhovmcbjr',
  password: 'e2729cc89363fabeb55b2e13313e6c08668d315e508bd25136e6c21278384ccc',
  host: 'ec2-52-202-152-4.compute-1.amazonaws.com',
  port: 5432,
  dialect: 'postgres',
  native: true,
  dialectOptions: {
    ssl: {
      
      rejectUnauthorized: false
    }
  },
  
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

module.exports = env;

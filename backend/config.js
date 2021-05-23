const env = process.env;


const config = {
  db: { /* don't expose password or any sensitive info, done only for demo */
    // host: env.DB_HOST || 'remotemysql.com',
    // user: env.DB_USER || 'zSkSydEiMn',
    // password: env.DB_PASSWORD || 'nu7JIvNfTe',
    // database: env.DB_NAME || 'zSkSydEiMn',
    host: env.DB_HOST || 'localhost',
    user: env.DB_USER || 'hope',
    password: env.DB_PASSWORD || 'hope',
    database: env.DB_NAME || 'xmleditoronline',
  },
  listPerPage: env.LIST_PER_PAGE || 10,
};


module.exports = config;
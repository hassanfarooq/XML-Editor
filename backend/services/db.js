const mysql = require('mysql2/promise');
const config = require('../config');

async function query(sql, params) {
  const connection = await mysql.createConnection(config.db);
  const [results, ] = await connection.execute(sql, params);

  return results;
}
async function saveModel(sql,modelList,namedParams){
  const connection = await mysql.createConnection(config.db);
  const [results, ] = await connection.query({
    sql: sql,
    values: modelList,
    namedParameters: namedParams,
  })
  return results
}

async function updateModel(sql,modelList,namedParams){
  const connection = await mysql.createConnection(config.db);
  const [results, ] = await connection.query({
    sql: 'UPDATE content_xml SET content = :content  WHERE key = :mykey',
    values: modelList,
    namedParameters: namedParams,
  })
  return results
}

module.exports = {
  query,saveModel
}
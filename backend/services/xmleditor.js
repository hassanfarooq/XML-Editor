const db = require('./db');
const helper = require('../helper');
const config = require('../config/').db;
const {generalServerError} =  require('../util/serverResponse')

async function getMultiple(page = 1){
    let response = {

    };
    try{

        const offset = helper.getOffset(page, config.listPerPage);
        const rows = await db.query(
            `SELECT *  
    FROM content_xml LIMIT ?,?`,
            [offset, config.listPerPage]
        );
        const data = helper.emptyOrRows(rows);
        const meta = {page};
        response =  {
            ...response,data,meta
        }
    }catch (e) {
		console.log(e);
        response = generalServerError();
    }

    return response;
}
async function get(key){
    let response = {

    };
    try{


        const rows = await db.query(
            'SELECT *  FROM content_xml WHERE `key` = ?',
            [key]
        );
        const data = helper.emptyOrRows(rows);

        response =  {
            ...response,data
        }
    }catch (e) {
        response = generalServerError();
    }

    return response;
}
async function create(xml){

    let response = {message:'Error in creating XML'};
    try{



        let newModel = [ { 'key': xml.key, content: xml.content ,timestamp:new Date(),lastupdate:new Date()} ];
        let promise = await db.saveModel('INSERT INTO content_xml SET ?',newModel,false);


        if(promise && promise.affectedRows > 0){
            response.code = '00';
            response.message = 'Content Saved Successfully';
            response.key = xml.key;
        }else{
            response.code = '01';
            response.key = null;
        }

    }catch (e) {
        console.log(e);
        response=generalServerError()
    }
    return response;
}

async function update(id, xml){
    let response = {message:'Error in Updating XML'};
    try{

        let content  = xml.xml;
        let lastupdate =new Date();
        let key =id;

        let demo = `-- UPDATE content_xml SET content = :content AND lastupdate = :lastupdate WHERE key = :mykey `;
        // let mainQuery = 'UPDATE `content_xml` SET `content-key` = ? AND `lastupdate` = ? WHERE `key` = ?';
        let mainQuery = 'UPDATE `content_xml` SET `content` = ?  WHERE `key` = ?';

        // console.log("local log ",mainQuery);


        const result = await db.query(mainQuery,[content,key]);

        if (result.affectedRows) {
            response.code = '00';
            response.message = 'Content Updated Successfully';
            response.key = id;
        }else{
            response.code = '01';
            response.message = 'Content Updates Failed';
            response.key = id;
        }
    }catch (e) {
        response = generalServerError();
        console.log(e)
    }



    return response;
}


module.exports = {
    getMultiple,
    create,
    update,get
}
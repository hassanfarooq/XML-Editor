const express = require('express');
const md5 = require('md5');
const isBase64 = require('is-base64');
const {body,check,validationResult} = require('express-validator');
const { v4: uuidv4 } = require('uuid');
const xmlEditorRoutes = express.Router();
const xmlEditor = require('../services/xmleditor');
const {generalServerError}  = require('../util/serverResponse')

/* GET programming languages. */
xmlEditorRoutes.get('/', async function(req, res, next) {
    try {
        let query = req.query;
        res.json(await xmlEditor.get(query.id));
    } catch (err) {
        console.error(`Error while getting programming languages `, err.message);
        res.json(generalServerError())
    }
});

/* POST programming language */
xmlEditorRoutes.post('/', [check('xml').notEmpty()],async (req, res, next) => {


    try {
        let validationResults = validationResult(req);
        if(validationResults.errors && validationResults.errors.length === 0){

            let bodyData = req.body;
            let clientIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            let mdClientIP = md5(clientIp);
            let uuid = uuidv4().toString();
            let xml  = bodyData.xml;
            let key  = bodyData.key;
            let isXml = isBase64(xml);
            if(isXml){
                if(['null',null,'undefined',undefined].find(v => v === key).length > 0){
                    let dbResponse = await xmlEditor.create({key:uuid,content:xml});
                    res.json(dbResponse);
                }else{
                    //     Update Scene

                }
            }else{
                res.json({code:'01',message:'Invalid Xml in Request'})
            }

        }else{
            res.json({code:'01',message:'Invalid Inputs in Request'})
        }

    } catch (err) {
        console.error(`Error while creating xml content `, err.message);
        res.json(generalServerError())
        // next(err);
    }
});

/* PUT programming language */
xmlEditorRoutes.put('/:id', [check('xml').notEmpty()],async (req, res, next) => {
    try {
        // console.log(req);
        let updateBody = req.body;
        res.json(await xmlEditor.update(req.params.id, updateBody));
    } catch (err) {
        console.error(`Error while updating programming language`, err.message);
        res.json(generalServerError())
    }
});


module.exports = xmlEditorRoutes;
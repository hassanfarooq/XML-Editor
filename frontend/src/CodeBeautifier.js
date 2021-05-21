import * as React from "react";
import {Component} from "react";
// import CodeBeautifierAppBar from "./ToolBar";
import SplitterDemo from "./SplitterDemo";
// import WebWorker from "./webworker/workerSetup";
// import jsonParserWorker from "./webworker/jsonworker";
import ParserOptions from "./ParserOptions";
import {convertToJson, getTraversalObj, parse, validate} from 'fast-xml-parser'
import Modes from "./ResultModes"
import NavBarTailwind from "./NavBarTailwind";
import ToolBarDemo from "./ToolBar";
import ClosingAlert from "./Alert";
import axios from 'axios';
import Encoder from "./ext/demo";


export class CodeBeautifier extends Component {


    constructor(props) {
        super(props);

        this.state = {
            editorRef: React.createRef(),
            resultEditRef: React.createRef(),
            splitter: React.createRef(),
            resultWrapper: React.createRef(),
        };

    }




    componentDidMount = () => {
        // this.jsonParserWorker = new WebWorker(jsonParserWorker);
        console.log("location",this.props.location.search);
        if(this.props && this.props.location && this.props.location.search){
            let urlSearchParams = new URLSearchParams(this.props.location.search);
            console.log(urlSearchParams.get("id"));
            if(urlSearchParams && urlSearchParams.get("id")){

            }
        }

    }

    renderData = () => {
        // let inputValue = this.state.splitter.current.state.inputValue;
        // let splitterComp = this.state.splitter.current;
        // splitterComp.onResultChange(inputValue);
        // console.log(inputValue,splitterComp);

        let resultMode = this.getResultMode();
        console.log("resultMode From Wrapper ",resultMode);
        if(Modes.XML === resultMode){
            this.xmlProcess();
        }else if(Modes.JSON === resultMode){
            this.jsonProcess();
        }
        else if(Modes.TREE === resultMode){
            this.treeProcess();
        }
        else{
            this.getResultEditor().setValue(this.getInputEditor().getValue());
        }

    };

    getInputEditor = () => {
        return this.state.splitter.current.getInputEditor();
    }


    getResultEditor = () => {
        return this.state.splitter.current.getResultEditor();
    }

    getResultSession = () => {
        return this.state.splitter.current.getResultSession();
    }

    getInputSession = () => {
        return this.state.splitter.current.getInputSession();
    }

    getResultBlock = () => {
        return this.state.splitter.current.getResultBlock();
    }

    getResultMode = () => {
        return this.state.splitter.current.getResultMode();
    }


    undo = () => {
        console.log("undo")
        this.getInputEditor().undo();
    }


    redo = () => {
        this.getInputEditor().redo();
    }

    xmlProcess = () => {

        // console.log("xmlProcess",this.getResultSession().getMode().$id)
        // if(this.getResultSession().getMode().$id === Modes.XML){
        // //     mode is already set
        // }else{
        // //    set mode First
        //     this.getResultBlock().changeResultMode(Modes.XML);
        //     // this.getResultSession().setMode(Modes.XML);
        // }
        let parsedXml = this.parseToXml();
        this.getResultBlock().processResults(Modes.XML,parsedXml);


    };
    jsonProcess = () => {

        // console.log("xmlProcess",this.getResultSession().getMode().$id);



        // if(this.getResultSession().getMode().$id === Modes.JSON){
        //     //     mode is already set
        // }else{
        //     //    set mode First
        //     this.getResultBlock().changeResultMode(Modes.JSON);
        //     // this.getResultSession().setMode(Modes.JSON);
        // }
        let message = this.parseToJson();
        console.log(message);
        this.getResultBlock().processResults(Modes.JSON,message);

    };

    validateData = (value) => {
        let status = {status :false};
        try{
            let results = validate(value);
            if(results.err){
                status={status:false,...results};
            }else{
                status={status: results};
            }

        }catch (e){
            console.log(e);
            status = {status: false,...e}
        }
        return status;
    }
    parseToXml = () => {


        let xmlData = this.getInputEditor().getValue();
        let validation = this.validateData(xmlData);
        console.log(validation)
        if( validation.status === true) { //optional (it'll return an object in case it's not valid)
            let resultMode = this.getResultMode();
            console.log("resultMode from Wrapper",resultMode)
            let jsonObj = parse(xmlData,ParserOptions);
            let traversalObj = getTraversalObj(xmlData,ParserOptions);
            let convertToJson1 = convertToJson(traversalObj,ParserOptions);
            // let convertToJsonString1 = convertToJsonString(traversalObj,ParserOptions);
            console.log(typeof traversalObj)
            console.log(jsonObj)
            console.log(convertToJson1)
            // console.log(convertToJsonString1)
            // this.getResultEditor().setValue(xmlData);
            // AceBeautifier.beautify(this.getResultSession());
            return xmlData;
        }


        // return this.getInputEditor().getValue();
    }
    parseToJson = () => {
        let value = this.getInputEditor().getValue();
        // console.log(value);
        let validation = this.validateData(value);
        // console.log(validation)
        if( validation.status === true) {

            // debugger;
            let traversalObj = getTraversalObj(value,ParserOptions);
            let javaScriptVal = convertToJson(traversalObj,ParserOptions);
            // let convertToJsonString1 = convertToJsonString(traversalObj,ParserOptions);
            // console.log(value,traversalObj,javaScriptVal)


            // let javaScriptVal = parse(value,ParserOptions);
            // console.log(javaScriptVal)
            let message = JSON.stringify(javaScriptVal,null,'\t');
            return message;
        }
        // let javaScriptVal = {};

        return "";
    }
    treeProcess = () => {


        let value = this.getInputEditor().getValue();
        // console.log(value);
        let validation = this.validateData(value);
        // console.log(validation)
        let javaScriptVal = {};
        if( validation.status === true) {

            // debugger;
            let traversalObj = getTraversalObj(value,ParserOptions);
            javaScriptVal= convertToJson(traversalObj,ParserOptions);

        }

        this.getResultBlock().processResults(Modes.TREE,javaScriptVal);
    };

    saveContent = () => {
        let userKey = window.location.href;
        let parsedXml = this.parseToXml();
        // /rest/api.php?request=call

        let uuid = localStorage.getItem("uuid");

        let encodedString = Encoder.encodeXml(parsedXml);
        let formData = new FormData();    //formdata object

        formData.append('xml', encodedString);   //append the values with key, value pair
        formData.append('key', uuid);

        const config = {
            headers: { 'content-type': 'multipart/form-data' }
        }

        if(uuid){
            axios.put(`/api/xml-editor/${uuid}`,formData,config)
                .then(res => {
                    console.log(res);
                    if(res.data && res.data.code === '00'){
                        localStorage.setItem("uuid",res.data.key)
                    }else {

                    }
                }).catch(function (error) {
                console.log(error);
            })
        }else{
            axios.post(`/api/xml-editor`,formData,config)
                .then(res => {
                    console.log(res);
                    if(res.data && res.data.code === '00'){
                        localStorage.setItem("uuid",res.data.key)
                    }else {

                    }
                }).catch(function (error) {
                console.log(error);
            })
        }

    }

    render() {
        return <>
            {/*<ClosingAlert color="red" />*/}
            <NavBarTailwind />

            <ToolBarDemo
                renderData={this.renderData}
                xmlProcess={this.xmlProcess}
                jsonProcess={this.jsonProcess}
                treeProcess={this.treeProcess}
                undo={this.undo}
                redo={this.redo}
                saveContent={this.saveContent}
            />

            <SplitterDemo
                editorRef={this.state.editorRef}
                resultEditRef={this.state.resultEditRef}
                resultWrapper={this.state.resultWrapper}
                ref={this.state.splitter}
            />

        </>;
    }
}
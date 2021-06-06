import * as React from "react";
import { Component } from "react";
// import CodeBeautifierAppBar from "./ToolBar";
import SplitterDemo from "./SplitterDemo";
// import WebWorker from "./webworker/workerSetup";
// import jsonParserWorker from "./webworker/jsonworker";
import ParserOptions from "./ParserOptions";
import { convertToJson, getTraversalObj, parse, validate } from 'fast-xml-parser'
import Modes from "./ResultModes"

import NavBarTailwind from "./NavBarTailwind";
import ToolBarDemo from "./ToolBar";
import axios from 'axios';
import Encoder from "./ext/app-encoder";
import ModalDemo from "./ModalDemo";
import { FullScreen } from "react-full-screen";
import Formatter from "./ext/AppFormatter";
import Sucesss from "./msg/Sucesss";
import prettifyXml from "prettify-xml";

export class CodeBeautifier extends Component {


    constructor(props) {
        super(props);

        this.state = {
            editorRef: React.createRef(),
            resultEditRef: React.createRef(),
            splitter: React.createRef(),
            resultWrapper: React.createRef(),
            popUpRef: React.createRef(),
        };

    }




    componentDidMount = () => {
        // this.jsonParserWorker = new WebWorker(jsonParserWorker);
        // console.log("location",this.props);
        localStorage.removeItem("uuid")
        if (this.props && this.props.location && this.props.location.search) {
            let urlSearchParams = new URLSearchParams(this.props.location.search);
            let identifier = `?id=${urlSearchParams.get("id")}`;
            if (urlSearchParams && urlSearchParams.get("id")) {
                axios.get(`/api/xml-editor/${identifier}`)
                    .then(res => {
                        let objectData = res.data.data[0];
                        let content = objectData.content;
                        content = Encoder.decodeXml(content);
                        // console.log("content -- ", encodedString);
                        content = Formatter.xmlBeautify(content);
                        localStorage.setItem("uuid", objectData.key)
                        this.state.splitter.current.onInputRequestChange(content);

                        // if(res.data && res.data.code === '00'){
                        //     localStorage.setItem("uuid",res.data.key)
                        // }else {
                        //
                        // }
                    }).catch(function (error) {
                        console.log(error);
                    })
            }
        }

    }

    renderData = () => {
        // let inputValue = this.state.splitter.current.state.inputValue;
        // let splitterComp = this.state.splitter.current;
        // splitterComp.onResultChange(inputValue);
        // console.log(inputValue,splitterComp);

        let resultMode = this.getResultMode();
        // console.log("resultMode From Wrapper ",resultMode);
        if (Modes.XML === resultMode) {
            this.xmlProcess();
        } else if (Modes.JSON === resultMode) {
            this.jsonProcess();
        }
        else if (Modes.TREE === resultMode) {
            this.treeProcess();
        }
        else {
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

    copyData = () => {
        let inputEditor = this.getInputEditor();
        let sel = inputEditor.selection.toJSON();
        inputEditor.selectAll();
        inputEditor.focus();
        document.execCommand('copy');
        inputEditor.selection.fromJSON(sel);

    }
    clearData = () => {
        this.state.splitter.current.onInputRequestChange('');
        this.state.splitter.current.onInputResultChange('');
    }

    undo = () => {
        // console.log("undo")
        this.getInputEditor().undo();
    }


    redo = () => {
        this.getInputEditor().redo();
    }

    minifiedInputEditor = () => {
        let xmlData = this.getInputEditor().getValue();
        let validation = this.validateData(xmlData);
        // console.log(validation)
        if (validation.status === true) {
            let minifiedXml = Formatter.xmlMinified(xmlData);
            // console.log("final minifed",minifiedXml);
            this.state.splitter.current.onInputRequestChange(minifiedXml);
        }
    }
    expandInputEditor = () => {
        let xmlData = this.getInputEditor().getValue();
        let validation = this.validateData(xmlData);
        // console.log(validation)
        if (validation.status === true) {
            let dataSet = Formatter.xmlBeautify(xmlData);
            this.state.splitter.current.onInputRequestChange(dataSet);
        }
    }
    minifiedResults = () => {
        this.getResultBlock().minifiedData();
    }
    expandResults = () => {
        this.getResultBlock().expandedData();
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
        this.getResultBlock().processResults(Modes.XML, parsedXml);


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
        // console.log(message);
        this.getResultBlock().processResults(Modes.JSON, message);

    };

    validateData = (value) => {
        let status = { status: false };
        try {
            let results = validate(value);
            if (results.err) {
                status = { status: false, ...results };
            } else {
                status = { status: results };
            }

        } catch (e) {
            console.log(e);
            status = { status: false, ...e }
        }
        return status;
    }
    parseToXml = () => {


        let xmlData = this.getInputEditor().getValue();
        let validation = this.validateData(xmlData);
        // console.log(validation)
        if (validation.status === true) { //optional (it'll return an object in case it's not valid)
            let resultMode = this.getResultMode();
            // console.log("resultMode from Wrapper",resultMode)
            let jsonObj = parse(xmlData, ParserOptions);
            let traversalObj = getTraversalObj(xmlData, ParserOptions);
            let convertToJson1 = convertToJson(traversalObj, ParserOptions);
            // let convertToJsonString1 = convertToJsonString(traversalObj,ParserOptions);
            // console.log(typeof traversalObj)
            // console.log(jsonObj)
            // console.log(convertToJson1)
            // console.log(convertToJsonString1)
            // this.getResultEditor().setValue(xmlData);
            // AceBeautifier.beautify(this.getResultSession());
            return Formatter.xmlBeautify(xmlData);
        }


        // return this.getInputEditor().getValue();
    }
    parseToJson = () => {
        let value = this.getInputEditor().getValue();
        // console.log(value);
        let validation = this.validateData(value);
        // console.log(validation)
        if (validation.status === true) {

            // debugger;
            let traversalObj = getTraversalObj(value, ParserOptions);
            let javaScriptVal = convertToJson(traversalObj, ParserOptions);
            // let convertToJsonString1 = convertToJsonString(traversalObj,ParserOptions);
            // console.log(value,traversalObj,javaScriptVal)


            // let javaScriptVal = parse(value,ParserOptions);
            // console.log(javaScriptVal)
            let message = Formatter.jsonBeautify(javaScriptVal);
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
        if (validation.status === true) {

            // debugger;
            let traversalObj = getTraversalObj(value, ParserOptions);
            javaScriptVal = convertToJson(traversalObj, ParserOptions);

        }

        this.getResultBlock().processResults(Modes.TREE, javaScriptVal);
    };

    saveContent = (refresh = false, shareIt = false) => {
        let userKey = window.location.href;
        // let parsedXml = this.parseToXml();
        let xmlData = this.getInputEditor().getValue();
        let validation = this.validateData(xmlData);
        // console.log(validation)
        if (validation.status === true) {
            let uuid = localStorage.getItem("uuid");
            let parsedXml = Formatter.xmlMinified(xmlData);
            let encodedString = Encoder.encodeXml(parsedXml);
            let formData = new FormData();    //formdata object

            formData.append('xml', encodedString);   //append the values with key, value pair
            formData.append('key', uuid);

            const config = {
                headers: { 'content-type': 'multipart/form-data' }
            }

            if (uuid) {
                axios.put(`/api/xml-editor/${uuid}`, formData, config)
                    .then(res => {
                        //console.log(res);
                        if (res.data && res.data.code === '00') {
                            // debugger;
                            localStorage.setItem("uuid", res.data.key);
                            // this.props.history.push("/?id="+res.data.key);
                            if (refresh) {
                                window.location.replace("/?id=" + res.data.key);
                            } else {
                                this.props.history.push("/?id=" + res.data.key);
                                this.state.splitter.current.onInputRequestChange(xmlData);
                                // console.log("shareIt",shareIt,this.state.popUpRef)
                                if (shareIt) {
                                    this.state.popUpRef.current.openModal(userKey);
                                }
                            }
                            //this.state.splitter.current.onInputRequestChange(parsedXml);
                        } else {

                        }
                    }).catch(function (error) {
                        console.log(error);
                    })
            } else {
                axios.post(`/api/xml-editor`, formData, config)
                    .then(res => {
                        // console.log(res);
                        if (res.data && res.data.code === '00') {
                            localStorage.setItem("uuid", res.data.key);
                            // this.props.history.push("/?id="+res.data.key);
                            if (refresh) {
                                window.location.replace("/?id=" + res.data.key);
                            } else {
                                this.props.history.push("/?id=" + res.data.key);
                                this.state.splitter.current.onInputRequestChange(xmlData);
                                if (shareIt) {
                                    this.state.popUpRef.current.openModal(userKey + "?id=" + res.data.key);
                                }
                            }

                            //
                        } else {

                        }
                    }).catch(function (error) {
                        console.log(error);
                    })
            }
        }
        // /rest/api.php?request=call



    }

    openShare = () => {
        // console.log("this.state.popUpRef.current",this.state.popUpRef.current,window.location)
        this.saveContent(false, true);

    }
    handleFull = () => {
        // console.log("document",document)
        // let requestFullscreen = window.requestFullscreen();
        // console.log("requestFullscreen",requestFullscreen)

        document.documentElement.requestFullscreen();
        //         let element = document.querySelector("#root");
        //
        // // make the element go to full-screen mode
        //         element.requestFullscreen()
        //             .then(function() {
        //                 // element has entered fullscreen mode successfully
        //             })
        //             .catch(function(error) {
        //                 // element could not enter fullscreen mode
        //             });
    }
    render() {
        // console.log("this.state.content",this.state.content);
        return <>
            {/*<ClosingAlert color="red" />*/}
            <div class="flex dark:bg-DarkBG pr-3">
                <div class="w-20 p-2">
                    <img src="logo.png" class="h-14 w-14" />
                </div>
                <div class="w-full">
                    <NavBarTailwind />
                    {/*<FullScreen handle={this.props.handleFull}>*/}
                    <ModalDemo ref={this.state.popUpRef} />
                    <ToolBarDemo
                        renderData={this.renderData}
                        xmlProcess={this.xmlProcess}
                        jsonProcess={this.jsonProcess}
                        treeProcess={this.treeProcess}
                        undo={this.undo}
                        redo={this.redo}
                        minified={this.minifiedInputEditor}
                        expand={this.expandInputEditor}
                        saveContent={this.saveContent}
                        setIsOpen={this.openShare}
                        minifiedResults={this.minifiedResults}
                        expandResults={this.expandResults}
                        copyData={this.copyData}
                        clearData={this.clearData}
                        // handleFull={this.props.handleFull}
                        handleFull={this.handleFull}
                    />
                </div>
            </div>
            <SplitterDemo
                editorRef={this.state.editorRef}
                resultEditRef={this.state.resultEditRef}
                resultWrapper={this.state.resultWrapper}
                ref={this.state.splitter}
            />

            {/*</FullScreen>*/}
        </>;
    }
}
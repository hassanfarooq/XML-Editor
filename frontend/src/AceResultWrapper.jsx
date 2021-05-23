import React, {Component, Suspense} from 'react';
import AceEditorWrapper from "./AceEditorWrapper";
import Modes from "./ResultModes"
import VirtualTreeComponent from "./VTreeDemo";

import Encoder from "./ext/app-encoder"
import Formatter from "./ext/AppFormatter";

class AceResultWrapper extends Component {

    state = {
        editorMode: Modes.XML,
        value:null,
        // editorRef:this.props.resultEditRef
        editorRef:React.createRef(),
        treeRef:React.createRef(),
        encodedVal:''
    }
    processResults = (mode,value) => {
        console.log("process Results",this.state.treeRef);
        // if(this.state.treeRef && this.state.treeRef.current && mode === ResultModes.TREE && this.state.editorMode === ResultModes.TREE){
        //     this.state.treeRef.current.noidea();
        // }
        this.setState({editorMode: mode,value:value})
    }

    expandedData = () => {
        const {editorMode,value} = this.state;
        console.log("process Results",editorMode,value);
        // if(this.state.treeRef && this.state.treeRef.current && mode === ResultModes.TREE && this.state.editorMode === ResultModes.TREE){
        //     this.state.treeRef.current.noidea();
        // }
        if(Modes.XML === editorMode){
            let expandedData = Formatter.xmlBeautify(value);
            this.setState({value:expandedData})
        }else if (Modes.JSON === editorMode){
            let jsonBeautify = Formatter.jsonBeautify(value);
            this.setState({value:jsonBeautify})
        }

    }

    minifiedData = () => {
        const {editorMode,value} = this.state;
        console.log("process Results",editorMode,value);
        if(Modes.XML === editorMode) {
            let xmlMinified = Formatter.xmlMinified(value);
            this.setState({value: xmlMinified});
        }else if (Modes.JSON === editorMode){
            let jsonMinified = Formatter.jsonMinified(value);
            this.setState({value: jsonMinified});
        }
    }

    getResultMode = () => {
        return this.state.editorMode;
    }

    getSession = () => {
        return this.state && this.state.editorRef && this.state.editorRef.current && this.state.editorRef.current.getSession();
    }
    getEditor = () => {
        return this.state && this.state.editorRef && this.state.editorRef.current && this.state.editorRef.current.getEditor();
    }
    render() {
        const {editorMode,value} = this.state;
            // console.log(editorMode,value)
            let comm = [Modes.XML,Modes.JSON];
            let isEditor = comm.find(m => m === editorMode);
            if(value){
                let encodedString = Encoder.encodeXml(value);
                console.log(encodedString)
                let decodeXml =Encoder.decodeXml(encodedString);
                console.log(decodeXml);


                // console.log(unescape(encodeURIComponent(value)))
            }

            let loader  = <div>Loading...</div>;
        return (
            isEditor ?
            <Suspense fallback={loader}>
                 <AceEditorWrapper
                name="editor2"
                readOnly={true}
                mode={editorMode}
                theme={"monokai"}
                value={value}
                onInputChange={null}
                // value={JSON.stringify(javaScriptVal, null, "\t")}
                ref={this.state.editorRef}
            >
            </AceEditorWrapper>
            </Suspense> :<Suspense fallback={loader}>
                    <VirtualTreeComponent data={value} ref={this.state.treeRef}/>
                </Suspense>
        );
    }
}

export default AceResultWrapper;
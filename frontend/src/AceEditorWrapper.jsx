import React from "react";
// import { render } from "react-dom";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-xml";
import "ace-builds/src-noconflict/mode-json";

import Beautify from 'ace-builds/src-noconflict/ext-beautify';
// import jsonWorkerUrl from "file-loader!ace-builds/src-noconflict/worker-xml";

import "ace-builds/webpack-resolver";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/worker-xml";
import "ace-builds/src-noconflict/ext-language_tools";

export default class AceEditorWrapper extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            value : this.props.value,
            mode : this.props.mode,
            name : this.props.name,
            theme : this.props.theme,
        };

        this.editorRef = React.createRef();
        // ace.config.setModuleUrl("ace/mode/json_worker", jsonWorkerUrl)
    }
  onChange = (newValue) => {
    // console.log("change", newValue);
    //   this.props.onInputChange(newValue);
    //   console.log(this.getSession())
    // this.setState({value:newValue});
  };

    onBeforeLoad= (ace) => {
        // console.log("ace ",ace);
        // import jsonWorkerUrl from "file-loader!ace-builds/src-noconflict/worker-xml";
        // ace.config.setModuleUrl("ace/mode/xml_worker", jsonWorkerUrl)
    }

    getEditor = () => {
        return this.editorRef.current.editor;
    }
    getSession = () => {
        return this.editorRef.current.editor.session;
    }
  render() {

    return (
      <AceEditor
        mode={this.props.mode}
        theme={this.props.theme}
        onChange={this.onChange}
        name={this.props.name}
        editorProps={{ $blockScrolling: true }}
        value={this.props.value}
        // annotations={annotations}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
          readOnly: this.props.readOnly,
            displayIndentGuides:false
        }}
        onBeforeLoad={this.onBeforeLoad}
        height="inherit"
        width="inherit"
        ref={this.editorRef}
        commands={Beautify.commands}
      />
    );
  }
}

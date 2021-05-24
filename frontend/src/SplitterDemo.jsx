import * as React from "react";

import {Splitter} from "@progress/kendo-react-layout";
import AceEditorWrapper from "./AceEditorWrapper";
import AceResultWrapper from "./AceResultWrapper";
import ModalDemo from "./ModalDemo";

export default class SplitterDemo extends React.Component {
  constructor(props) {
    super(props);
    let xml = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n" +
        "<note importance=\"high\" logged=\"true\">\n" +
        "        <title prop=\"demo\">Happy</title>\n" +
        "    <todo>Work</todo>\n" +
        "    <todo>Play</todo>\n" +
        "  </note>";
    let result = "";
    console.log("props.content",props.content)
    this.state = {
      panes: [{ min: "5%" }, { size: "50%" }],
      inputValue:props.content ? props.content : xml,
      resultValue:result,
      editorRef:this.props.editorRef,
      resultEditRef:this.props.resultEditRef,
      resultWrapper:this.props.resultWrapper,

    };
  }

  onChange = (event) => {
    // console.log("input change",this.getInputEditor().getValue());
    let stateData = {
      panes: event.newState
    }
    if(this.getInputEditor() && this.getInputEditor().getValue()){
      stateData.inputValue = this.getInputEditor().getValue();
    }
    this.setState(stateData);
  };

  onInputChange = (value) => {
    console.log("input change",this.getInputEditor().getValue());
    this.setState({
      inputValue: value
    });
  }

  onInputRequestChange = (value) => {
    console.log("onInputRequestChange",value);
    this.setState({
      inputValue: value
    });
  }
  onInputResultChange = (value) => {
    console.log("onInputRequestChange",value);

    this.state.resultWrapper.current.setState({value:value})
  }

  getInputEditor = () => {
    return this.state.editorRef.current.getEditor();
  }


  getResultEditor = () => {
    return this.state.resultWrapper.current.getEditor();
  }

  getInputSession = () => {
    return this.state.editorRef.current.getSession();
  }


  getResultSession = () => {
    return this.state.resultWrapper.current.getSession();
  }

  getResultBlock = () => {
    return this.state.resultWrapper.current;
  }

  getResultMode = () => {
    return this.state.resultWrapper.current.getResultMode();
  }


  render() {

    // console.log(typeof buildObject);
    // console.log(js_beautify(javaScriptVal, { indent_size: 2, space_in_empty_paren: true }));
    return (
      <div>

        <Splitter
          style={{ height: 'calc( 100vh - 64px)' }}
          panes={this.state.panes}
          onChange={this.onChange}
          // className={"h-screen"}
        >
          <AceEditorWrapper name="editor1"
                         readOnly={false}
                         value={this.state.inputValue}
                         mode={"xml"}
                            theme={"monokai"}
                         ref={this.state.editorRef}
                            onInputChange = {null}
          />
          <AceResultWrapper resultEditRef={this.state.resultEditRef} ref={this.state.resultWrapper}
          />
        </Splitter>

      </div>
    );
  }
}

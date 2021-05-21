import React from "react";
import AceEditorWrapper from "./AceEditorWrapper";
import * as PropTypes from "prop-types";
import {Button, ButtonGroup, Grid} from "@material-ui/core";

export class EditorDemo extends React.Component {
    constructor() {
        super();
        this.myref = React.createRef();
    }

    undoData=() => {
    // this.myref.current.editor.undo()
        this.myref.current.getEditor().undo()
    console.log()
    };

    redoData=() => {
        this.myref.current.getEditor().redo()
    }

    newValue = () => {
  let newValue =   ` {
  newValue:'1',
  backwards: false,
  wrap: true,
  caseSensitive: false,
  wholeWord: false,
  regExp: true
}`

        this.myref.current.getEditor().setValue(newValue);
  console.log(this.myref.current.getEditor())
  console.log(this.myref.current.getSession())
    }

    changeMode = () => {

    }
    render() {
        return <>
            <Grid container spacing={3}>
                <ButtonGroup color="secondary" aria-label="outlined primary button group">
                    <Button onClick={this.undoData}>Undo</Button>
                    <Button onClick={this.redoData}>Redo</Button>
                    <Button onClick={this.newValue}>New</Button>
                </ButtonGroup>
                <AceEditorWrapper name="editor1"
                                  readOnly={false}
                                  value={` {
  backwards: false,
  wrap: true,
  caseSensitive: false,
  wholeWord: false,
  regExp: true
}`}
                                  mode={"json"}
                                  theme={"monokai"}
                                  ref={this.myref}
                                  onInputChange={this.props.onInputChange}
                />
            </Grid>

        </>;
    }
}

EditorDemo.propTypes = {
    onClick: PropTypes.func,
    onClick1: PropTypes.func,
    ref: PropTypes.any,
    onInputChange: PropTypes.any
};
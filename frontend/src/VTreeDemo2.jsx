import React from 'react';
import {VariableSizeTree as Tree} from 'react-vtree';
import ParserOptions from "./ParserOptions";

// Tree component can work with any possible tree structure because it uses an
// iterator function that the user provides. Structure, approach, and iterator
// function below is just one of many possible variants.

let tree =         {
    "name": "root",
    "id": "root~root",
    "children": [
        {
            "name": "country",
            "id": "root~root~country",
            "children": [
                {
                    "name": "_id",
                    "id": "root~root~country~#attr~0",
                    "value": "f0_136",
                    "isAttr": true
                },
                {
                    "name": "_name",
                    "id": "root~root~country~#attr~1",
                    "value": "Albania",
                    "isAttr": true
                },
                {
                    "name": "_population",
                    "id": "root~root~country~#attr~2",
                    "value": "3249136",
                    "isAttr": true
                },
                {
                    "name": "_car_code",
                    "id": "root~root~country~#attr~3",
                    "value": "AL",
                    "isAttr": true
                },
                {
                    "name": "name",
                    "id": "root~root~country~name",
                    "children": [],
                    "value": "Albania"
                },
                {
                    "name": "city",
                    "id": "root~root~country~city~0",
                    "children": [
                        {
                            "name": "_id",
                            "id": "root~root~country~city~0~#attr~0",
                            "value": "f0_36514",
                            "isAttr": true
                        },
                        {
                            "name": "_country",
                            "id": "root~root~country~city~0~#attr~1",
                            "value": "f0_136",
                            "isAttr": true
                        },
                        {
                            "name": "_longitude",
                            "id": "root~root~country~city~0~#attr~2",
                            "value": "20.1",
                            "isAttr": true
                        },
                        {
                            "name": "_latitude",
                            "id": "root~root~country~city~0~#attr~3",
                            "value": "41.1",
                            "isAttr": true
                        },
                        {
                            "name": "name",
                            "id": "root~root~country~city~0~name",
                            "children": [],
                            "value": "Elbasan"
                        },
                        {
                            "name": "population",
                            "id": "root~root~country~city~0~population",
                            "children": [
                                {
                                    "name": "_year",
                                    "id": "root~root~country~city~0~population~#attr~0",
                                    "value": "87",
                                    "isAttr": true
                                }
                            ],
                            "value": 53000,
                            "isParent": true
                        }
                    ],
                    "isParent": true
                },
                {
                    "name": "city",
                    "id": "root~root~country~city~1",
                    "children": [
                        {
                            "name": "_id",
                            "id": "root~root~country~city~1~#attr~0",
                            "value": "f0_36518",
                            "isAttr": true
                        },
                        {
                            "name": "_country",
                            "id": "root~root~country~city~1~#attr~1",
                            "value": "f0_136",
                            "isAttr": true
                        },
                        {
                            "name": "_longitude",
                            "id": "root~root~country~city~1~#attr~2",
                            "value": "20.5",
                            "isAttr": true
                        },
                        {
                            "name": "_latitude",
                            "id": "root~root~country~city~1~#attr~3",
                            "value": "40.4",
                            "isAttr": true
                        },
                        {
                            "name": "name",
                            "id": "root~root~country~city~1~name",
                            "children": [],
                            "value": "Korce"
                        },
                        {
                            "name": "population",
                            "id": "root~root~country~city~1~population",
                            "children": [
                                {
                                    "name": "_year",
                                    "id": "root~root~country~city~1~population~#attr~0",
                                    "value": "87",
                                    "isAttr": true
                                }
                            ],
                            "value": 52000,
                            "isParent": true
                        }
                    ],
                    "isParent": true
                },
                {
                    "name": "ethnicgroups",
                    "id": "root~root~country~ethnicgroups~0",
                    "children": [
                        {
                            "name": "_percentage",
                            "id": "root~root~country~ethnicgroups~0~#attr~0",
                            "value": "3",
                            "isAttr": true
                        }
                    ],
                    "isParent": true,
                    "value": "Greeks"
                },
                {
                    "name": "ethnicgroups",
                    "id": "root~root~country~ethnicgroups~1",
                    "children": [
                        {
                            "name": "_percentage",
                            "id": "root~root~country~ethnicgroups~1~#attr~0",
                            "value": "95",
                            "isAttr": true
                        }
                    ],
                    "isParent": true,
                    "value": "Albanian"
                },
                {
                    "name": "religions",
                    "id": "root~root~country~religions~0",
                    "children": [
                        {
                            "name": "_percentage",
                            "id": "root~root~country~religions~0~#attr~0",
                            "value": "70",
                            "isAttr": true
                        }
                    ],
                    "isParent": true,
                    "value": "Muslim"
                },
                {
                    "name": "religions",
                    "id": "root~root~country~religions~1",
                    "children": [
                        {
                            "name": "_percentage",
                            "id": "root~root~country~religions~1~#attr~0",
                            "value": "20",
                            "isAttr": true
                        }
                    ],
                    "isParent": true,
                    "value": "Albanian Orthodox"
                },
                {
                    "name": "border",
                    "id": "root~root~country~border~0",
                    "children": [
                        {
                            "name": "_length",
                            "id": "root~root~country~border~0~#attr~0",
                            "value": "151",
                            "isAttr": true
                        },
                        {
                            "name": "_country",
                            "id": "root~root~country~border~0~#attr~1",
                            "value": "f0_300",
                            "isAttr": true
                        }
                    ],
                    "isParent": true
                },
                {
                    "name": "border",
                    "id": "root~root~country~border~1",
                    "children": [
                        {
                            "name": "_length",
                            "id": "root~root~country~border~1~#attr~0",
                            "value": "287",
                            "isAttr": true
                        },
                        {
                            "name": "_country",
                            "id": "root~root~country~border~1~#attr~1",
                            "value": "f0_370",
                            "isAttr": true
                        }
                    ],
                    "isParent": true
                }
            ],
            "value": "...",
            "isParent": true
        }
    ],
    "value": "...",
    "isParent": true
} ;

function* treeWalker(refresh) {
    const stack = [];

    stack.push({
        nestingLevel: 0,
        node: tree,
    });

    while (stack.length !== 0) {
        const {
            node: {children = [], id, name,value,isAttr,isParent},
            nestingLevel,
        } = stack.pop();

        const isOpened = yield refresh
            ? {
                // The only difference VariableSizeTree `treeWalker` has comparing to
                // the FixedSizeTree is the `defaultHeight` property in the data
                // object.
                defaultHeight: 30,
                id,
                isLeaf: children.length === 0,
                isOpenByDefault: true,
                name,
                nestingLevel,
                value,
                isAttr,
                isParent
            }
            : id;

        if (children.length !== 0 && isOpened) {
            for (let i = children.length - 1; i >= 0; i--) {
                stack.push({
                    nestingLevel: nestingLevel + 1,
                    node: children[i],
                });
            }
        }
    }
}

// Node component receives current node height as a prop
const NodeNew = ({data, height, isOpen, style, toggle,treeData: itemSize}) => {
    let {isLeaf, name,nestingLevel,value,isAttr,isParent} = data;

    const canOpen = height <= itemSize;
    const halfSize = itemSize / 2;
    let marginLeft = nestingLevel * 15 + (isLeaf ? 20 : 0);
    // console.log("margin left",name,value,isParent,marginLeft);
    let nodeContent = "";
    if(isParent){
        nodeContent = name + " " + value;
    }else if (isAttr){
        nodeContent = name + ":" + value;
    }else{
        nodeContent = value;
    }
    let containerStyle = {
        ...style,
        alignItems: 'center',
        background: canOpen ? undefined : '#ddd',
        display: 'flex',
        marginLeft: marginLeft,
    }
    if(isAttr){
        containerStyle.color = 'green';
    }

    let buttonStyles = {
        marginRight:'10px',
        color:'white',
        background:'#17436f',
        border:'solid 1px #17436f'
    }
    return (

        <div style={containerStyle}>
            {!isLeaf && (
                <button type="button" onClick={toggle} style={buttonStyles}>
                    {isOpen ? '-' : '+'}
                </button>
            )}
            {isParent ? (
                    <span style={{padding:"'0 0 0 12px'",fontWeight:'bold'}}>
            <span style={{"marginRight":"8px","background":"#17436f","padding":"2px 3px","color":"#f4f4f4","borderRadius":"3px"}}>{name}</span>
                        {value}</span>
                // <div className="parent">{nodeContent}</div>
            ) : isAttr ? (<div><span>{name}:  </span><span>{value}</span></div>) :
                (<div>{nodeContent}</div>)
            }
        </div>
    )
};

// Node component receives current node height as a prop
const Node = ({data: {isLeaf, name}, height, isOpen, style, toggle}) => (
    <div style={style}>
        {!isLeaf && (
            <button type="button" onClick={toggle}>
                {isOpen ? '-' : '+'}
            </button>
        )}
        <div>{name}</div>
    </div>
);

let constructTree = function (r,id,d){
    this.name = r;
    this.id = id;
    let keys = [];
    if(typeof d === "object" ){
        keys= Object.keys(d);
    }else{
        this.isString = true;
        this.value = d;
    }

    if(keys.length > 0){
        this.children = [];
    }
    this.isParent = true;
    for (let k of keys) {
        let isAttr = false;
        let isText = false;
        let isArray = false;
        let id1 = id+'~'+k;
        let c = {name:k,id: id1,children:[]};
        debugger;
        if(typeof d[k] === "object" && k !== "#attr" && (!Array.isArray(d[k]))){
            c.value = '...'

            constructTree.call(c,k,id1,d[k]);
        }else if(Array.isArray(d[k])){
            isArray = true;
            let arrayChild = [];
            for(let i in d[k]){
                let arrayD = {name:k,id: id1,children:[]};
                constructTree.call(arrayD,k,id1+'~'+i,d[k][i]);
                console.log(JSON.stringify(arrayD))
                arrayChild.push(arrayD);
                this.children = [...this.children,arrayD];
            }

        }else if(k === "#attr"){
            // debugger;
            let arrayChild = [];
            let attrKeys = Object.keys(d[k]);
            isAttr = true;
            for(let i in attrKeys){
                this.children = [...this.children,{name:attrKeys[i],id:id1+'~'+i,value:d[k][attrKeys[i]],isAttr:true}];
                // arrayChild.push({name:i,id:k+'~'+i,value:d[k][attrKeys[i]]});
            }
            // c.children = [...c.children,arrayChild];

        }else if(k === "#text"){
            this.value = d[k];
        }
        else
            c.value = d[k]

        if(!isAttr || !isText || !isArray)
            this.children = [...this.children,c];
        // console.log(JSON.stringify(c));
    }
    return this;
}

const VirtualTreeComponent2 = (props) => {
    let result = {};
    if(props.data){
        let rootKey = Object.keys(props.data)[0];
        constructTree.call(result,rootKey,rootKey,props.data);
        console.log("result" ,result);
        tree = result.children[0];
    }

    return (
        <Tree treeWalker={treeWalker} height={700} width="100%" >
            {NodeNew}
        </Tree>
    );
};

export default VirtualTreeComponent2;

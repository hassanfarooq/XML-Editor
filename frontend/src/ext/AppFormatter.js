import format from 'xml-formatter'
import prettifyXml from 'prettify-xml'

const minifiedXML = (xmlData) => {
  // let minifiedXml = xmlData.replace(/\n|\r/g, " ");
  return  prettifyXml(xmlData,{indent: 0, newline: ''});
}
const minifiedJSON = (value) => {
  return JSON.stringify(JSON.parse(value))
}
const xmlBeautify = (xmlData) => {
  // return format(xmlData,{
  //   indentation: '  ',
  //   filter: (node) => node.type !== 'Comment',
  //   collapseContent: true,
  //   stripComments: true,
  //   lineSeparator: '\n',
  //   whiteSpaceAtEndOfSelfclosingTag:false
  // });
  let response = prettifyXml(prettifyXml(xmlData,{indent: 0, newline: ''}),{indent: 2, newline: '\n'});
  return response
}
const jsonBeautify = (value) => {
  if(typeof value === "object"){
    return JSON.stringify(value,null,'\t');
  }else{
    return JSON.stringify(JSON.parse(value),null,'\t');
  }


}
const Formatter =  {
  xmlMinified:minifiedXML,
  xmlBeautify:xmlBeautify,
  jsonBeautify:jsonBeautify,
  jsonMinified:minifiedJSON
}
export default Formatter;
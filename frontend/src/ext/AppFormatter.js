import format from 'xml-formatter'

const minifiedXML = (xmlData) => {
  let minifiedXml = xmlData.replace(/\n|\r/g, " ");
  return minifiedXml.replace(/>\s{0,}</g, "><");
}
const minifiedJSON = (value) => {
  return JSON.stringify(JSON.parse(value))
}
const xmlBeautify = (xmlData) => {
  return format(xmlData);
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
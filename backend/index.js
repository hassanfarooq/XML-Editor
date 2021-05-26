const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
var multer = require('multer');
var path = require('path');
const config = require('./config/');
var upload = multer();
const app = express();
const port = config && config.server && config.server.port;

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
app.use(upload.array());
app.use(cors());
app.use(express.static(path.join(__dirname, '..', 'frontend/build/')));
const programmingLanguagesRouter = require('./routes/programmingLanguages');
const xmlEditorRoutes = require('./routes/xmleditor');
const versionRouter = require('./routes/version');



app.get('/api/', (req, res) => {
  res.json({'message': 'ok'});
})


app.use('/api/programming-languages', programmingLanguagesRouter);
app.use('/api/xml-editor', xmlEditorRoutes);
app.use('/api/version', versionRouter);


app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({'message': err.message});
  
  
    return;
  });

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
});
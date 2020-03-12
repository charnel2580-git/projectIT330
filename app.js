const express = require('express');
const expressLayouts = require('express-ejs-layouts');


const app = express();



//ejs
app.use(expressLayouts);
app.set('view engine', 'ejs');


//declare
app.use("/js", express.static(__dirname + '/views/assets/js/demo'));
app.use("/js", express.static(__dirname + '/views/assets/js'));
app.use("/js", express.static(__dirname + '/views/js'));
app.use("/img", express.static(__dirname + '/views/assets/img'));
app.use("/css", express.static(__dirname + '/views/assets/css'));
app.use("/css", express.static(__dirname + '/views/css1'));

app.use("/img", express.static(__dirname + '/views/jpg'));

app.use("/img", express.static(__dirname + '/views/assets/img'));

app.use('/static', express.static('public'));

app.use("/js", express.static(__dirname + '/views/js/js'));
// app.use("/css", express.static(__dirname + '/views/assetss/css'));
// app.use("/js", express.static(__dirname + '/views/assetss/js'));
// app.use("/img", express.static(__dirname + '/views/assetss/img'));
// app.use("/jpg", express.static(__dirname + '/views/assetss/jpg'));
// app.use("/png", express.static(__dirname + '/views/assetss/png'));

//routes
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));

const PORT = process.env.PORT || 5000;


app.listen(PORT, console.log('SERVER STARTED ' , PORT));

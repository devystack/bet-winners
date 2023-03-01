const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
// const passport = require('passport');
var cors = require("cors");
const app = express();
const passport = require('passport');
app.use(passport.initialize());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
// app.use(passport.initialize());

// api connection
const apiRoute = require('./src/route')
app.use('/api/v1', apiRoute)
// // service
// const fourWinnerService = require('./src/service/four.winner.service')
// fourWinnerService.updateMatchList()
// setInterval(() => {
//   fourWinnerService.updateMatchList()
// }, 300000);

// connecting client
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});
// setting port and run
const port = process.env.PORT || 5000;
app.listen(port);
console.log(`listening on ${port}`);

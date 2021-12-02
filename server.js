const fs = require('fs-extra');
const helper = require('./helper');
const express = require('express');
var https = require('https');
var http = require('http');

const subscribersFilePath = "./data/subscribers.json";
var subscribers = fs.readJSONSync(subscribersFilePath);
/*
http.createServer(function (req, res) {
    res.writeHead(301, { "Location": "https://" + req.headers['host'] + req.url });
    res.end();
}).listen(80);
*/

const app = express();
const port = 80;

function addSubscriber(user){
    subscribers.users.push(helper.encrypt(JSON.stringify(user)));
    fs.writeJSONSync(subscribersFilePath, subscribers);
}

app.use(express.static('public'));
app.use(express.urlencoded());

app.post('/subscribe', (req, res) => {
    console.log('body:',req);
    var user = {};
    try {
        user.name = req.body["name"];
        user.email = req.body["email"];
        user.long = req.body["long"];
        user.lat = req.body["lat"];
        user.ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
        user.identify = req.body["identify"];
        user.consent = req.body["consent"];

        addSubscriber(user);
    } catch (error) {
        console.log(error);
        res.status(500).send("There was an error in processing the request");
    }

    res.send("Congratulations! You've been subscribed to our newsletter!");
});

app.get('/rycjtr35iy3h7yid', (req, res)=>{
    var users = [];
    subscribers.users.forEach(user=> {
        users.push(JSON.parse(helper.decrypt(user)));
    });
    res.send(users);
});

// remove qobyrndwtc when going live

app.get('/', function(req, res){
    res.sendFile('index.html', { root: __dirname + "/public" } );
});
/*
app.get('/', function(req, res){
    res.sendFile('index2.html', { root: __dirname + "/public" } );
});

var options = {
    key: fs.readFileSync('/home/pathtocareer/ssl/keys/f25b1_1f6ff_e055e1f415271d9a1aa5665a96d495cf.key'),
    cert: fs.readFileSync('/home/pathtocareer/ssl/certs/pathtocareer_com_f25b1_1f6ff_1639699199_4074433085e95c227b45d29226efcfe6.crt')
};
*/
/*
http.createServer(app).listen(80, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
*/



/*
https.createServer(options, app).listen(443, () => {
  console.log(`Example app listening at http://localhost:443`)
});
*/

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});


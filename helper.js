const fs = require('fs-extra');
const NodeRSA = require('node-rsa');
const key = new NodeRSA({b: 512});
 
var keyPath = "./data/.key";
var keyFormat = "pkcs1";

if(fs.existsSync(keyPath)){
    key.importKey(fs.readFileSync(keyPath, "utf-8"), keyFormat);
}
else{
    fs.writeFileSync(keyPath, key.exportKey(keyFormat));
}

function encrypt(text){
    return key.encrypt(text, 'base64');
}

function decrypt(encryptedText){
    return key.decrypt(encryptedText, 'utf8');
}

module.exports = {encrypt, decrypt};
/**
 * Created by bsoer on 6/5/2015.
 */

var request = require('request');
var fs = require('fs');

// path to the file to upload
var pathToFile = "C:/Users/mobile-2.1.15142.2.zip";

//the url to upload to
var urlBase = "http://192.168.23.254:8081";

var formData = {
    file: fs.createReadStream(pathToFile)
};

//call the upload
request.post({url: urlBase + '/upload', formData: formData}, function (error, response, body) {
    if (error) {
        //print out the error if there is an error
        console.log(error);
    }

    if(!error && response.statusCode == 200){
        //print out the response data is successful
        console.log(body);
    }
});
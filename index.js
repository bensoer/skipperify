/**
 * Created by bsoer on 6/4/2015.
 */
/** Setup RESTify **/
var restify = require('restify');
var server = restify.createServer();
/** Install Skipper as module to RESTify **/
server.use(require('skipper')());

//test route
server.get('/hello/:name', function(req, res, next){
    res.send({data:'hello ' + req.params.name});
    next();
});

//actual upload route
server.post('/upload', function(req, res, next){

    console.log("Incoming Upload Detected");

    //handle upload
    req.file('file').upload(
        {
            //get the original file name and save it with that same name
            saveAs: './' + req.file('file')._files[0].stream.filename
        },
        function (err, uploadedFiles){
            if (err){
                //if there was an error uploading the file
                logger.fatal("Upload Error");
                logger.fatal(err);
                res.send(500, err);

            }else{
                console.log("Upload Successful");

                //file will be placed in ./.tmp/uploads
                res.send(200, {message: "File uploaded Successfully"});
                next();
            }
        });

    next();
});

/** Initialize server to start listening **/
server.listen( process.argv[2] || 8081, function() {
    console.log('%s listening at %s', server.name, server.url);
});
# skipperify
A demo setup using Skipper and RESTify

# Setup
1. `npm install` to install all dependencies
2. in the `client.js` file set the `pathToFile` variable to the directory of the file you would like to upload
3. in the `client.js` file set the `baseURL` variable to the URL the server is located. If this is setup on the same
machine this will be your own IP
4. in console, cd to the project, then call `node index.js` to start the server
5. in another console, cd to the project, then call 'node client.js`
6. Your file will now be uploaded and placed into the `./.tmp/upload` folder. This folder will be created in the project
root if it doesn't exist already
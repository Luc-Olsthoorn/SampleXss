import {app} from './routes.js';
import {connect} from './database.js';


//kill it when I say kill it
process.on('SIGINT', function() {
    process.exit();
});
//Doesnt die all the time
process.on('uncaughtException', function (err) {
  console.log('Caught exception: ' + err);
});
connect();
    
const PORT = 8080;

//start this bitch up
const server = app.listen(PORT, function(){
  console.log('Server is ready at' + PORT);
});

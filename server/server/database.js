let database = false;
const connect = () => {
	let MongoClient = require('mongodb').MongoClient, format = require('util').format;
	setTimeout(()=>{
		if(!database){
				//Connects to or creates mydb database
				MongoClient.connect('mongodb://database:27017/mydb', function(err, db) {
		  		if(err){
		  			console.log(err);
		  			console.log("failed connecting to mongodb. Trying again.");
		  		}else{
		  			database = db.db("mydb");
		  			buildDatabase();
		  			console.log("Connected to MongoDB");
			    }
			});
		}
	},1000);
}
const buildDatabase = () =>{
	database.createCollection("myTable", (err, res) => {
    if (err) throw err;
    console.log("Collection created!");
  });
}
export {database, connect}
import {database} from './database.js';
import sanitizer from 'sanitizer';

const getNote = (key) => {
	let promise = new Promise((resolve, reject) => {
		let collection = database.collection('myTable');
	 	collection.find({"key" : key}).toArray(function(err, records) {
			if(err){
				//cannot connect to database
				reject("error getting records");
				console.log("error getting records");
			}
			else if(records[0] == null){
				//Cant find key
				resolve(false);
			}
			else{
				resolve(records[0].note);
			}
		});
	});
	return promise;
};
const setNote = (key, note) => {
	//note = sanitizer.sanitize(note); //xss prevention
	//key = sanitizer.sanitize(key); //xss prevention
	let promise = new Promise((resolve, reject) => {
		let collection = database.collection('myTable');
		collection.insert({
			key:key,
			note: note
		}, function(err, docs) {
			if(err){
				reject("error registering");
				console.log("error registering");
			}
			else{
				resolve(docs.note);
			}
		});
	});
	return promise;
}
export {setNote, getNote}
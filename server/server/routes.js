import graphqlHTTP from 'express-graphql';
import {schema, root} from "./graphQl";
import path from 'path';
import bodyParser from 'body-parser';
import express from 'express'; //routing

import {setNote, getNote} from './notes.js';

var cors = require('cors');
const app = express();
app.use(cors())
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use( bodyParser.text() );       // to support JSON-encoded bodies
app.use(express.static(path.join(__dirname, 'public')));


app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true
}));

app.get('/', (req, res)=>{
  	res.sendFile(path.join(__dirname, 'public/index.html'));
});
app.post('/getNote', (req, res)=>{
 	getNote(req.body.key).then((response)=>{
 		res.send(response);
 	});
});

app.post('/setNote', (req, res)=>{
	setNote(req.body.key, req.body.note).then((response)=>{
 		res.send(response);
 	});
});

app.post('/getdata', (req,res)=>{
	return res.send('data from seller');
})

export {app}

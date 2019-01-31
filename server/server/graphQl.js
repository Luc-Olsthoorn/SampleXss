import { graphql, buildSchema } from 'graphql';
import { getNote } from './notes.js';

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    note(id: String!) : String
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
  note: (args) => {
    return getNote(args.id);
  },
};

export {schema, root}
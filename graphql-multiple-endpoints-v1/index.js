import { GraphQLServer } from 'graphql-yoga'
import typeDefs from './schema/types'
import resolvers from './resolvers/resolvers'

//apollo enginer api key 
const APOLLO_ENGINE_KEY = "<ENTER YOUR KEY HERE>";

//run graphql server with apollo stuff here
const server = new GraphQLServer({
    typeDefs,
    resolvers,
    engine: {
        apiKey: APOLLO_ENGINE_KEY
    },
    formatError: error => {
        console.log(error);
        return error;
    },
    formatResponse: response => {
        console.log(response);
        return response;
    },
})

server.start(() => console.log('Server is running.... '))
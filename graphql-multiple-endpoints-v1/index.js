import { GraphQLServer } from 'graphql-yoga'
import typeDefs from './schema/types'
import resolvers from './resolvers/resolvers'

//run graphql server here
const server = new GraphQLServer({
    typeDefs,
    resolvers
})

server.start(() => console.log('Server is running.... '))
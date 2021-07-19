import { ApolloServer } from 'apollo-server'
import mongoose from 'mongoose'

function startServer ({typeDefs, resolvers}){
    //adcionando o mongodb ao graphql
    mongoose.connect('mongodb://localhost:27017/graphql', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    const server = new ApolloServer ({typeDefs, resolvers})
    server.listen().then(({ url }) => console.log(`🚀 Server Started at ${url}`))
}

export default startServer
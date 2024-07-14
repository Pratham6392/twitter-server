
import express from  "express";
import { ApolloServer } from "@apollo/server";
import {expressMiddleware} from "@apollo/server/express4"


async function startApolloServer() {
  const app = express();
  const graphqp =new ApolloServer({
        typeDefs:`
        type Query{
            hello:String}`
            ,
            resolvers:{
                Query:{
                    hello:()=> 'Hello World'
                },
                Mutation:{}
            }


  });


  await graphqp.start();
}

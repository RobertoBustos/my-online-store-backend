import "dotenv/config";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema/typeDefs.js";
import { resolvers } from "./resolvers.js";
import { createContext } from "./context/index.js";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const port = Number(process.env.PORT ?? 4000);

const { url } = await startStandaloneServer(server, {
  listen: { port },
  context: createContext,
});

console.log(`🛒 my-online-store-backend ready at ${url}`);

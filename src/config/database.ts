import { MongoClient, Db } from "mongodb";
import { env } from "./env";
import dotenv from "dotenv";

dotenv.config();

let client: MongoClient;
let db: Db;

export const connectDB = async () => {
  try {
    const uri = env.mongoUri;

    if (!uri) {
      throw new Error("MONGO_URI no está definido");
    }

    client = new MongoClient(uri);

    await client.connect();

    db = client.db(env.dbName);

    console.log("MongoDB conectado correctamente");
  } catch (error) {
    console.error("Error conectando MongoDB:", error);
    process.exit(1);
  }
};

export const getDb = () => db;
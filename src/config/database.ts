import { MongoClient, Db } from "mongodb";
<<<<<<< HEAD
import { env } from "./env";

=======
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.MONGO_URI as string;
const dbName = process.env.MONGO_DB_NAME as string;

let client: MongoClient;
>>>>>>> 83861f7f3ba09c729eac251c6940e6726d5f428f
let db: Db;

export const connectDB = async () => {
  try {
<<<<<<< HEAD
    if (!env.mongoUri) {
      throw new Error("MONGO_URI no está definido");
    }

    const client = new MongoClient(env.mongoUri);

    await client.connect();

    db = client.db(env.dbName);

    console.log("MongoDB conectado correctamente");
  } catch (error) {
    console.error("Error conectando MongoDB:", error);
=======
    client = new MongoClient(uri);
    await client.connect();

    db = client.db(dbName);

    console.log(" MongoDB conectado correctamente");
  } catch (error) {
    console.error(" Error conectando MongoDB:", error);
>>>>>>> 83861f7f3ba09c729eac251c6940e6726d5f428f
    process.exit(1);
  }
};

export const getDb = () => {
<<<<<<< HEAD
  if (!db) throw new Error("DB no inicializada");
=======
  if (!db) {
    throw new Error("DB no inicializada. Primero llama connectDB()");
  }
>>>>>>> 83861f7f3ba09c729eac251c6940e6726d5f428f
  return db;
};
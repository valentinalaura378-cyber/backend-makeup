import { MongoClient, Db } from "mongodb";
import { env } from "./env";

let db: Db;

export const connectDB = async () => {
  try {
    if (!env.mongoUri) {
      throw new Error("MONGO_URI no está definido");
    }

    const client = new MongoClient(env.mongoUri);

    await client.connect();

    db = client.db(env.dbName);

    console.log("MongoDB conectado correctamente");
  } catch (error) {
    console.error("Error conectando MongoDB:", error);
    process.exit(1);
  }
};

export const getDb = () => {
  if (!db) throw new Error("DB no inicializada");
  return db;
};
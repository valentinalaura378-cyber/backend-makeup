import dotenv from "dotenv";

dotenv.config();

export const env = {
  port: process.env.PORT || 3000,
  mongoUri: process.env.MONGO_URI as string,
  dbName: process.env.DB_NAME as string,
  jwtSecret: process.env.JWT_SECRET as string,
  jwtExpiration: process.env.JWT_EXPIRATION || "10h",
};
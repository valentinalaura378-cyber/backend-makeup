<<<<<<< HEAD
import dotenv from "dotenv";
=======
import dotenv from 'dotenv';
>>>>>>> 83861f7f3ba09c729eac251c6940e6726d5f428f

dotenv.config();

export const env = {
<<<<<<< HEAD
  port: process.env.PORT || 3000,
  mongoUri: process.env.MONGO_URI as string,
  dbName: process.env.DB_NAME as string,
  jwtSecret: process.env.JWT_SECRET as string,
  jwtExpiration: process.env.JWT_EXPIRATION || "10h",
};
=======
    port: Number(process.env.PORT) || 3000,
    mongoUri: process.env.MONGO_URI || '',
    mongoDbName: process.env.MONGO_DB_NAME || 'collaborate',
    jwtSecret: process.env.JWT_SECRET || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30',
    jwtExpiration:  process.env.JWT_EXPIRATION || '10h'
}
>>>>>>> 83861f7f3ba09c729eac251c6940e6726d5f428f

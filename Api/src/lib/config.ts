import dotenv from 'dotenv';

dotenv.config();

const config={
    dbUser:process.env.DB_USER || 'postgres',
    dbPassword:process.env.DB_PASSWORD || '1234',
    dbHost:process.env.DB_HOST || 'localhost',
    dbName:process.env.DB_NAME || 'workshop',
    dbPort:process.env.DB_PORT || '3002',
    dev:process.env.NODE_ENV !== 'production',
    port:process.env.PORT || '3001',
    host:process.env.HOST || 'localhost',
    cors:process.env.CORS || 'http://localhost:3000'

}

export default config;
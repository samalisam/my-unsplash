import dotenv from 'dotenv';
import { ApiServer } from './server';

// load env variables
dotenv.config();

const server = new ApiServer();
server.start();

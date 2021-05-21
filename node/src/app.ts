import express, {Request, Response} from 'express';
import pool from './db';

const app: express.Application = express();

app.get('/', (req: Request, res: Response) => {
    res.send("Hello from Carlos:");
}) 

app.listen(5000,() => {console.log("Running Carlos's server on Port 5000")})


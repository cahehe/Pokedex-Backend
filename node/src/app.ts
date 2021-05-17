import express, {Request, Response} from 'express';

const app: express.Application = express();

app.get('/', (req: Request, res: Response) => {
    res.send("Hello from Carlos: ya tu sabee");
}) 

app.listen(5000,() => {console.log("Running Carlos's server on Port 5000")})


import express, {Request, Response} from 'express';
import pool from './db';

const app: express.Application = express();

app.use(express.json()) //used to request body

app.get('/', (req: Request, res: Response) => {
    res.send("Hello from Carlos:");
}) 

//get all 
app.get('/all', async (req: Request, res: Response) => {
    try{
        const all = await pool.query("SELECT * FROM GENERAL WHERE POKEDEX_NUMBER < 10; ")
        res.json(all.rows);
    }
    catch(err: any){
        console.log(err.message);
    }
})

app.listen(5000,() => {console.log("Running Carlos's server on Port 5000")})


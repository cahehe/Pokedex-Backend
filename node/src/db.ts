import pg, { Pool } from 'pg';
import express, {Request, Response} from 'express';

const pool: Pool = new pg.Pool({
    user: 'carloshehe',
    password: 'abcabc',
    database: 'pokedex',
    host: 'host.docker.internal',
    port: 5432
});

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

//export default module.exports = pool;
export default app;

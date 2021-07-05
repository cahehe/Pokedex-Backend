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
    res.header("Access-Control-Allow-Origin", "*");
    res.send("Hello from Carlos:");
}) 

//get general info 
app.get('/general', async (req: Request, res: Response) => {
    res.header("Access-Control-Allow-Origin", "*");
    try{
        const all = await pool.query("SELECT * FROM GENERAL; ")
        res.json(all.rows);
    }
    catch(err: any){
        console.log(err.message);
    }
})

//pokedexinfo
app.get('/pokedexinfo', async (req: Request, res: Response) => {
    res.header("Access-Control-Allow-Origin", "*");
    try{
        const param = req.query['name']
        const data = await pool.query(`SELECT * FROM POKEDEXINFO WHERE NAME = '${param}'; `)                
        res.json(data.rows)
    }
    catch(err: any){
        console.log(err.message)
    }
})

//abilities
app.get('/abilities', async (req: Request, res: Response) => {
    res.header("Access-Control-Allow-Origin", "*");
    try{
        const param = req.query['name']
        const data = await pool.query(`SELECT * FROM ABILITIES WHERE NAME = '${param}'; `)                
        res.json(data.rows)
    }
    catch(err: any){
        console.log(err.message)
    }
})

//basic stats
app.get('/basicstats', async (req: Request, res: Response) => {
    res.header("Access-Control-Allow-Origin", "*");
    try{
        const param = req.query['name']
        const data = await pool.query(`SELECT * FROM BASICSTATS WHERE NAME = '${param}'; `)                
        res.json(data.rows)
    }
    catch(err: any){
        console.log(err.message)
    }
})

//training
app.get('/training', async (req: Request, res: Response) => {
    res.header("Access-Control-Allow-Origin", "*");
    try{
        const param = req.query['name']
        const data = await pool.query(`SELECT * FROM TRAINING WHERE NAME = '${param}'; `)                
        res.json(data.rows)
    }
    catch(err: any){
        console.log(err.message)
    }
})

//maxes
app.get('/max', async (req: Request, res: Response) => {
    res.header("Access-Control-Allow-Origin", "*");
    try{
        const all = await pool.query("SELECT * FROM MAXVALS(); ")
        res.json(all.rows);
    }
    catch(err: any){
        console.log(err.message);
    }
})



//export default module.exports = pool;
export default app;

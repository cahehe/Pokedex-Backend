import pg, { Pool } from 'pg';

const pool: Pool = new pg.Pool({
    user: 'carloshehe',
    password: 'abcabc',
    database: 'pokedex',
    host: 'localhost',
    port: 5432
});

export default module.exports = pool;

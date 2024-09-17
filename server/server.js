import express from 'express'
import dotenv from 'dotenv'
import pg from 'pg'
import cors from 'cors'

dotenv.config();

const PORT = 8000;
const URL = `/api/feu`;
const { Pool } = pg;
const pool = new Pool({
    //connection info for database
})

const app = express();
app.use(express.json());
app.use(cors());

app.get(`${URL}`, async (req, res, next) => {
    try {
        res.status(200).send("GET working");
    }
    catch (error) {
        next(error);
    }
})

app.listen(PORT, (req, res) => {
    console.log(`Listening on PORT: ${PORT}`);
})
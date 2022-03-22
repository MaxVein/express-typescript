import dotenv from 'dotenv';
import express, { Application, Request, Response } from 'express';

dotenv.config();

const PORT = process.env.PORT || 3000;
const app: Application = express();

app.get('/', (req: Request, res: Response) => {
	res.send('Hello world!');
});

app.listen(PORT, () => {
	console.log('Server is running ...');
});

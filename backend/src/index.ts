import express, { Application, Request, Response } from "express";
// import controller
import { getCity } from "./controllers/cityCtrl";

// create the http server
const app: Application = express();
const APP_URL = 'http://localhost:4200';
const PORT = 3000;

app.use('/api/cities', (req: Request, res: Response): void => {
  res.set('Access-Control-Allow-Origin', APP_URL);
  return getCity(req, res);
});

app.listen(PORT, (): void => {
  console.log('Server is running on the PORT:', PORT);
});
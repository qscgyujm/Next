import express, { Request, Response } from 'express';
// import cors from 'cors';
// import * as cors from 'cors';

// const corsOptions = {
//   origin: true,
//   // methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
//   // exposedHeaders: ['Content-Type', 'Authorization', 'token'],
// };

const router = express.Router();

// router.options(corsMiddleWare);
// router.use(cors(corsOptions));

router.get('/', (_:Request, res:Response) => {
  res.send('API Route');
});

router.get('/test', (_:Request, res:Response) => {
  res.send('API Route test');
});


export default router;

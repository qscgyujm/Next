import * as express from 'express';
import Server from 'next/dist/next-server/server/next-server';

export default (app: Server) => {
  const authRouter = express.Router();

  authRouter.get('/', (req, res) => {
    app.render(req, res, '/', req.query);
  });

  authRouter.get('/a', (req, res) => {
    app.render(req, res, '/a', req.query);
  });

  authRouter.get('/b', (req, res) => {
    app.render(req, res, '/b', req.query);
  });

  return authRouter;
};

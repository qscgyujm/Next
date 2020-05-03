import express from 'express';
import next from 'next';

// import { createServer } from 'http';
// import { parse } from 'url';

import Api from './route/index';
import authRouter from './route/authRouter';

const port = parseInt(process.env.PORT || '3000', 10);
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use(authRouter(app));
  server.use('/api', Api);

  server.get('*', (req, res) => handle(req, res));

  server.listen(port, (err): void => {
    if (err) {
      process.exit(1);
    }

    console.log(`Ready on http://localhost:${port}`);
  });

  // tslint:disable-next-line:no-console
  console.log(
    `> Server listening at http://localhost:${port} as ${
      dev ? 'development' : process.env.NODE_ENV
    }`,
  );
});

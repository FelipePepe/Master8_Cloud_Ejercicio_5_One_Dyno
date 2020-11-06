import express from 'express';
import cors from 'cors';
import { envConstants } from 'core/constants';
import path from 'path';

export const createApp = () => {
  const app = express();
  app.use(cors({ origin: envConstants.CORS_ORIGIN }));

  return app;
};

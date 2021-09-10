import express, { Application, Request, Response } from 'express';
import { ImagesController } from '../controllers/ImageController';
import { UserController } from '../controllers/UserController';

class ApiServer {
  private _port: string;
  public get port(): string {
    return this._port;
  }

  private _app: Application;
  public get app(): Application {
    return this._app;
  }

  constructor() {
    this._port = process.env.PORT ?? '3000';
    this._app = express();

    this._app.use(express.json());
    this._app.use(express.urlencoded({ extended: true }));

    // new UserController(this._app);
    new ImagesController(this._app);
  }

  start() {
    try {
      this._app.listen(this._port, () => {
        console.log('start server on port', this._port);
      });
    } catch (error) {
      console.error('failed starting server', error);
    }
  }
}

export { ApiServer };

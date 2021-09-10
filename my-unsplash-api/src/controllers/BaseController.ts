import { Application } from 'express';

abstract class BaseController {
  private _app: Application;
  public get app(): Application {
    return this._app;
  }

  private _baseUrl: string;
  public get baseUrl(): string {
    return this._baseUrl;
  }

  constructor(app: Application, baseUrl: string = '/api') {
    this._app = app;
    this._baseUrl = baseUrl;
    this.registerRoutes();
  }

  abstract registerRoutes(): void;
}

export { BaseController };

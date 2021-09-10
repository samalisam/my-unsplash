import { Request, Response } from 'express';
import { BaseController } from './BaseController';

class ImagesController extends BaseController {
  registerRoutes(): void {
    this.app.get(`${this.baseUrl}/images`, this.list);
  }

  list(req: Request, res: Response): void {
    res.status(200).send({ message: 'image list' });
  }
}

export { ImagesController };

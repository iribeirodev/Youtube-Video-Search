import * as express from "express";
import { BaseController } from '../../controllers/base.controller';
import { YTVideoService } from '../services/ytvideo.service';

class YTVideoController extends BaseController {
  public path = "/ytvideos";

  constructor() {
    super();
    this.router = express.Router();
    this.initializeRoutes();
  }

  public initializeRoutes() {
    this.router.post(this.path, this.getVideo);
  }

  getVideo = (request: express.Request, response: express.Response) => {
    const ytVideoService = new YTVideoService();
    const criteria = request.body.criteria;

    ytVideoService.start(criteria)
      .then(res => response.send(res));
  };
}

export default YTVideoController;

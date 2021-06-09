import express from 'express';
import morgan from 'morgan';
import { BaseController } from './controllers/base.controller';
 
class App {
  public app: express.Application;
  public port: number;
 
  constructor(controllers: BaseController[], port: number) {
    this.app = express();
    this.port = port;
 
    this.initializeMiddlewares();
    this.initializeControllers(controllers);
  }
 
  private initializeMiddlewares() {
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true}))
    this.app.use(morgan("common"))
  }
 
  private initializeControllers(controllers: BaseController[]) {
    controllers.forEach((controller) => {
      this.app.use('/', controller.router);
    });
  }
 
  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  }
}
 
export default App;


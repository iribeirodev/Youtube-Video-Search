import App from './app';
import YTVideoController from './ytvideo/controllers/ytvideo.controller';
 
const app = new App(
  [
    new YTVideoController(),
  ],
  5000,
);
 
app.listen();
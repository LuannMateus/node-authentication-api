import { userRouter } from './routes/userRoutes';

export class App {
  private app;
  private express;

  constructor(express: any) {
    this.app = express();
    this.express = express;
    this.init();
  }

  public init() {
    this.middlewares();
    this.routes();
  }

  public middlewares() {
    this.app.use(this.express.urlencoded({ extended: true }));
    this.app.use(this.express.json());
  }

  public get getApp() {
    return this.app;
  }

  public routes() {
    this.app.use('/api/v1', userRouter);
  }
}

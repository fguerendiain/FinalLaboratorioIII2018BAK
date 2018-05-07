import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as logger from 'morgan';
import * as helmet from 'helmet';
import * as cors from 'cors';

import router from './routs/v1';
import config from './config/main';

//init express
const app = express();

//init postgreSQL
//postrges.connect(config.db);


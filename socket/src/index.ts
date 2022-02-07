require('dotenv').config()

import App from "./app";
import appConfig from './config/app'
const app = new App();
app.server.listen(appConfig.port)

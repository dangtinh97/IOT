require('dotenv').config()

import App from "./app";
import appConfig from './config/app'
const app = new App();
console.log('port',appConfig.port)
app.server.listen(appConfig.port)

import { Application, Context } from 'https://deno.land/x/oak/mod.ts';
import { config } from './config.ts';
import { log, MESSAGE } from "./utils/log.utils.ts";
import { initRoutes } from './routes.ts';

const env = Deno.env.toObject();
const HOST = env.HOST || config.host;
const PORT = env.PORT || config.port;
const app = new Application()
initRoutes(app);
log(`Listening on  ${HOST}:${PORT} ...`);
app.listen(`${HOST}:${PORT}`);
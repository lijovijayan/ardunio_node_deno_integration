import { Application } from "https://deno.land/x/oak/mod.ts";
import booksRouter from './routes/books.routes.ts';
import root from './routes/root.routes.ts';
export function initRoutes(app: Application) {
    app.use(root.routes());
    app.use(root.allowedMethods());
}

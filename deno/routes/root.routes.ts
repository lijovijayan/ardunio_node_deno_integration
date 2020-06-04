import { Router } from "https://deno.land/x/oak/mod.ts";
const router = new Router();
router.get('/', (context) => {
    context.response.status = 200;
    context.response.body = 'on root';
});
export default router;
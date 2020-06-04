import { Router } from "https://deno.land/x/oak/mod.ts";
import { log, MESSAGE } from "../utils/log.utils.ts";
const router = new Router();
router.get("/", (context) => {
  console.log("get request on root");
  context.response.status = 200;
  context.response.body = "on root (get)";
})
  .post("/", async ({ request, response }: { request: any; response: any }) => {
    if (request.hasBody) {
      const body = await request.body();
      const data = body.value;
      const message = `No. of Persons entered: ${data.numberOfObjectsDetected}`
      log('on root (post request)', MESSAGE.bold);
      log(message, MESSAGE.url);
      response.status = 200;
      response.body = "on root (post)";
    }
  });
export default router;

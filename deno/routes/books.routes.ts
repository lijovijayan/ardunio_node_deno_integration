import { Router } from 'https://deno.land/x/oak/mod.ts';
import { log, MESSAGE } from '../utils/log.utils.ts';

const router = new Router({prefix: '/books'});
router.get('/', ({ response }: { response: any }) => {
    log('sucess', MESSAGE.sucess);
    response.status = 200;
    response.body = 'books root';
});
router.get('/mybook', ({ response }: { response: any }) => {
    log('sucess', MESSAGE.sucess);
    response.status = 404;
    response.body = { message: `Book not found.` };
});
export default router;
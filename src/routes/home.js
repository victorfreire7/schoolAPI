import { Router } from "express";
const router = new Router();

router.get('/', (req, res) => {
  res.send('oi')
})

export default router;

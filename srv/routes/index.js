import express from 'express';
import player from './player';
import auth from './auth';
import user from './user';
import { ensureAuth, ensureGuest } from '../middleware/auth'

//const router = Router()
var router = express.Router();

router.use('/player',player);
router.use('/auth',auth);
router.use('/user',user);

//module.exports = router
export default router;
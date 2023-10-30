import mysql from "mysql"
import express from "express";
import itemsRoutes from "./Items.js";
var router = express.Router();

router.get('/user', itemsRoutes.get_user);
router.post('/user', itemsRoutes.post_user);
router.get('/games', itemsRoutes.get_games);
router.get('/games/latest', itemsRoutes.get_latest_games);
router.get('/games/top', itemsRoutes.get_top_game);
router.get('/Images/:name', itemsRoutes.get_image);


export default router;

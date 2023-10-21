import mysql from "mysql"
import express from "express";
import itemsRoutes from "./Items.js";
var router = express.Router();

router.get('/', itemsRoutes.get_home); //read
router.get('/user', itemsRoutes.get_user); //read




export default router;

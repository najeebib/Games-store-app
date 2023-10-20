import mysql from "mysql"
import express from "express";
import itemsRoutes from "./Items.js";
var router = express.Router();

router.get('/', itemsRoutes.get_home); //read
router.get('/users', itemsRoutes.get_users); //read




export default router;

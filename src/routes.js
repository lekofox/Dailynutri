import { Router } from "express";
import ListFoodController from "./controller/ListFoodController";
const routes = new Router();

routes.get("/", (req, res) => {
  res.status(200).json({
    message: "test",
  });
});

routes.get("/listfood/:food", ListFoodController.list);
export default routes;

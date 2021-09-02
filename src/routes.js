import { Router } from "express";
import ListFoodByCategoryController from "./controller/ListFoodByCategoryController";
import ListFoodController from "./controller/ListFoodController";
const routes = new Router();

routes.get("/", (req, res) => {
  res.status(200).json({
    message: "test",
  });
});

routes.get("/listfood/:food", ListFoodController.list);
routes.get("/listfoodbycategorie/:category", ListFoodByCategoryController.list);
export default routes;

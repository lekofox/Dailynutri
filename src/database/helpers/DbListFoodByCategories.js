import { dailyNutri } from "../config/connection";

export async function DbListFoodByCategories(params) {
  const query = await dailyNutri
    .select("*")
    .from("category")
    .innerJoin("food", "food.fk_category", "=", "category.id")
    .where("category.description", params);

  return query;
}

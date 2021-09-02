import { dailyNutri } from "../config/connection";

export async function DbListFood(params) {
  const query = await dailyNutri
    .table("food")
    .select(
      "food.description",
      "food.calories",
      "food.protein",
      "food.fat",
      "food.carbohydrate",
      "food.fiber",
      "food.sodium",
      "category.description as categoria"
    )
    .innerJoin("category", "fk_category", "category.id")
    .where("food.description", "ilike", `%${params}%`);

  return query;
}

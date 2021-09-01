import { dailyNutri } from "../../database/connection";

export async function DbListFood(params) {
  const query = await dailyNutri("food").where(
    "description",
    "ilike",
    `%${params}%`
  );

  return query;
}

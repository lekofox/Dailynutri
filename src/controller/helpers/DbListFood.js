import { dailyNutri } from "../../database/connection";

export async function DbListFood(params) {
  const query = await dailyNutri.select("*").where("description", params);

  return query;
}

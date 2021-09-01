import { dailyNutri } from "../database/connection";
class ListFoodController {
  async list(req, res) {
    try {
      const { food } = req.params;
      console.log(food);
      const query = await dailyNutri("food").where(
        "description",
        "ilike",
        `%${food}%`
      );
      if (query === "") {
        throw new {
          error: 404,
          message: "FOOD_NOT_FOUND",
        }();
      }

      return res.json(query);
    } catch (err) {
      console.log(err);
    }
  }
}

export default new ListFoodController();

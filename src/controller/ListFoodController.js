import { DbListFood } from "../database/helpers/DbListFood";

class ListFoodController {
  async list(req, res) {
    try {
      const { food } = req.params;
      const query = await DbListFood(food);

      if (query == "") {
        return res.status(404).json({
          message: "erro",
        });
      }

      return res.status(200).json(query);
    } catch (err) {
      console.log(err);
    }
  }
}

export default new ListFoodController();

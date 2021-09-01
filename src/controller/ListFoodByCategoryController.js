import { DbListFoodByCategories } from "../database/helpers/DbListFoodByCategories";

class ListFoodByCategories {
  async list(req, res) {
    try {
      const { category } = req.params;
      const query = await DbListFoodByCategories(category);

      return res.json(query);
    } catch (err) {}
  }
}

export default new ListFoodByCategories();

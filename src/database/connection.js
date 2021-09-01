import { knexfile } from "../../knexfile";

export const dailyNutri = require("knex")(knexfile["development"]);

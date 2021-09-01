import app from "./app";
const port = 3333;

try {
  app.listen(3333 || port);
  console.log("Server running on port " + port);
} catch (err) {
  console.log(err);
}

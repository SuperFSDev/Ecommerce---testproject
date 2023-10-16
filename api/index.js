const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");

const productRoute = require("./routes/product");
const orderRoute = require("./routes/order");

const app = express();
app.use(cors());

app.use(express.json());
app.use("/api/products", productRoute);
app.use("/api/orders", orderRoute);

console.log(process.env.MONGO_URL);
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Database connection successful");
  })
  .catch((err) => console.log(err));

app.listen(process.env.PORT || 4000, () => {
  console.log("Backend server is running");
});

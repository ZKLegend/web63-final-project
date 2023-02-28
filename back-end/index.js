const mongoose = require("mongoose");
const express = require("express");
const app = express();

const amenity = require("./routes/stay/amenity");
const stayCategory = require("./routes/stay/stay-category");

mongoose
  .connect(
    "mongodb+srv://web63-final-project:CHiende1234@cluster0.gf9zdm8.mongodb.net/web63-final-project"
  )
  .then(() => {
    console.log("Connected to Mongodb");
  })
  .catch((err) => console.error(err));

app.use(express.json());
app.use("/api/stay/amenity", amenity);
app.use("/api/stay/category", stayCategory);

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});

const express = require("express");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
const gradient = require("gradient-string");
const path = require("path")
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost/googleBooks"

  // Mongoose Deprecation warnings disabled
mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose.set("useUnifiedTopology", true);
mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("MongoDB Connected!"))
  .catch(error => console.log("MongoDB did not connect: ", error))
console.log(MONGODB_URI)
app.use(routes);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"))
});
app.listen(PORT, function() {
  console.log(gradient.summer(`🌎 ==> API server now on port ${PORT}!`))
});

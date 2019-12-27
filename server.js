const express = require("express");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
const gradient = require("gradient-string");

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost/googlebooks";
// Mongoose Deprecation warnings disabled
mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose.set("useUnifiedTopology", true);
mongoose.connect(MONGODB_URI);
app.use(routes);

app.listen(PORT, function() {
  console.log(gradient.summer(`🌎 ==> API server now on port ${PORT}!`));
});

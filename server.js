const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;

//process.env.PORT
//process.env.NODE_ENV => production or undefined

app.use(cors());

if (process.env.NODE_ENV === "production") {
  //server static content
  //npm run build
  app.use(express.static("client/build"));
}

//CONNECT DATABASE
connectDB();

app.use(express.json({ extended: false }));

//ROUTES
app.use("/", require("./routes/redirection"));
app.use("/api/url", require("./routes/url"));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

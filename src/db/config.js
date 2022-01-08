const db = require("mongoose");
const url = "mongodb://localhost:27017/mytodo";
const connectDB = async () => {
  try {
    await db.connect(url);
    console.log("Connected to db...");
  } catch (error) {
    console.log("Can't connect to db", error.message);
  }
};
const connectDB2 = () => {
  try {
    db.connect(url)
      .then(() => {
        console.log("Connected to db2...");
      })
      .catch(() => {
        console.error("Can't connect to db2");
      });
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = { connectDB, connectDB2 };

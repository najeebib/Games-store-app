import express from "express";
import cors from "cors";
import router from "./Routes/Routes.js";

const app = express();
app.use(cors());
app.use(express.json());  // Apply express.json() middleware here
app.use(express.urlencoded({ extended: true }));
app.use('/', router);

// ... other app configurations

app.listen(5000, () => {
  console.log("Listening on port 5000");
});

import express from "express";
import cors from "cors";
import router from "./Routes/Routes.js";
import path from 'path'

const __dirname = path.dirname(new URL(import.meta.url).pathname).slice(1);
console.log(path.join(__dirname, ''))
const app = express();
app.use(cors());
app.use(express.json());  // Apply express.json() middleware here
app.use(express.urlencoded({ extended: true }));
app.use('/Images', express.static(path.join(__dirname, 'Images')));

// ... other app configurations
app.use('/', router);

app.listen(5000, () => {
  console.log("Listening on port 5000");
});

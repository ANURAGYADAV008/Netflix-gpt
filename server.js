import express from "express";
import cors from "cors";
import openaiServer from "./server/Openaiserver.js";
import dotenv from "dotenv";

const app = express();
const PORT = 5000;
dotenv.config();

app.use(cors());            
app.use(express.json());    


app.get("/", (req, res) => {
  res.send("Hello Welcome To OpenAi Server");
});


app.use("/api", openaiServer);

app.listen(PORT, () => {
  console.log(`Server started running at port ${PORT}`);
});

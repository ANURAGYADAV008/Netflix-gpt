import express from "express";
import OpenAI from "openai";
import dotenv from "dotenv";



dotenv.config();
console.log("OpenAI Key loaded:", process.env.OPENAI_API_KEY ? "✅" : "❌");
const openaiServer = express.Router();
openaiServer.use(express.json());


openaiServer.get("/test", (req, res) => {
  res.send("Check your console");
});

openaiServer.post("/chat", async (req, res) => {
  const { query } = req.body;
  console.log(process.env.OPEN_API_KEY);

  try {
    const openai = new OpenAI({
      apiKey: process.env.OPEN_API_KEY
});
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: query }],
    });

    res.status(200).send({
      success: true,
      reply: response.choices[0].message.content,
    });
  } catch (error) {
    console.error(error);
    res.status(400).send({
      success: false,
      message: error.message,
    });
  }
});

export default openaiServer;

import express from "express";
import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();
const openaiServer = express.Router();
openaiServer.use(express.json());


openaiServer.get("/test", (req, res) => {
  console.log(process.env.OPENAI_API_KEY);
  res.send("Check your console");
});

openaiServer.post("/chat", async (req, res) => {
  const { query } = req.body;
  console.log("API KEY IS")

  try {
    const openai = new OpenAI({
      apiKey: "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"
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

import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("ResumePilot AI backend");
});

export default app;

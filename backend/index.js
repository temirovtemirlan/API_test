const cors = require("cors");
const express = require("express");
const axios = require("axios");
const app = express();

app.use(
  cors({
    origin: "http://localhost:5000/",
    methods: ["GET"],
  })
);

const PORT = 5000;
const skills = "https://monstrcorp.com/api/v1/waters/?format=json";

app.get("/", (req, res) => {
  res.send("this is the backend of");
});

app.get("/skills", async (req, res) => {
  fetch("https://monstrcorp.com/api/v1/waters/")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json(); // Распарсить JSON из ответа
    })
    .then((data) => {
      console.log(data); // Вывести данные в консоль
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
});

app.listen(PORT, (req, res) => {
  console.log("listening on port ", PORT);
});

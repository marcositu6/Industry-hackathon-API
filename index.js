const express = require("express");
require("dotenv").config();
const port = process.env.PORT || process.argv[2] || 8080;
const fs = require("fs");
const { v4: uuid } = require("uuid");

const app = express();
app.use(express.json());

const question1 = {
  question: "What kind of business are you starting?",
  options: {
    first: "fashion",
    second: "food",
    third: "gaming",
    fourth: "music",
    fifth: "movies",
    sixth: "tech",
  },
};
const question2 = {
  question: "Do you want to advertise in other sites?",
  options: {
    first: "Yes",
    second: "No",
  },
};
const question3 = {
  question: "Do you have an existing store?",
  options: {
    first: "Yes",
    second: "No",
  },
};
const question4 = {
  question: "Are you going to sell more than one product?",
  options: {
    first: "Yes",
    second: "No",
  },
};

const question5 = {
  question: "Are you planning on selling internationally?",
  options: {
    first: "Yes",
    second: "No",
  },
};
const question6 = {
  question: "What's your monthly E-commerce budget?",
  options: {
    first: "Not sure",
    second: "$50-$100",
    third: "$100-$150",
    forth: "$150+",
  },
};

app.get("/first", (req, res) => {
  res.json(question1);
});
app.get("/second", (req, res) => {
  res.json(question2);
});
app.get("/third", (req, res) => {
  res.json(question3);
});
app.get("/fourth", (req, res) => {
  res.json(question4);
});
app.get("/fifth", (req, res) => {
  res.json(question5);
});
app.get("/sixth", (req, res) => {
  res.json(question6);
});

// create a new form answer
// route -> POST http://localhost8080/api
/* INCOMING DATA FORMAT
    "{
      "businessType": "gaming",
      "Q2": true,
      "Q3": true,
      "Q4": true,
      "Q5": true,
      "budget": "$100-$150"
    }
    */
app.post("/API", (req, res) => {
  fs.readFile("./Data/Data.json", "utf-8", (err, data) => {
    if (err) {
      res.status(404).send("Resource not found.");
    } else {
      let answersData = JSON.parse(data);
      let newAnswer = {
        id: uuid(),
        businessType: req.body.businessType,
        Q2: req.body.Q2,
        Q3: req.body.Q3,
        Q4: req.body.Q4,
        Q5: req.body.Q5,
        budget: req.body.budget,
      };

      answersData.push(newAnswer);

      fs.writeFile("./Data/Data.json", JSON.stringify(answersData), (err) => {
        if (err) alert.log("File could not be written");
      });
      res.json(newAnswer);
    }
  });
});

app.listen(port, () => console.log(`Listening on ${port}`));

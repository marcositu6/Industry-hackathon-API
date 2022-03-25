const cors = require("cors");
const express = require("express");
require("dotenv").config();
const port = process.env.PORT || process.argv[2] || 8080;
const fs = require("fs");
const { v4: uuid } = require("uuid");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  fs.readFile("./data/inventories.json", "utf-8", (err, data) => {
    if (err) {
      res.status(404).send("Inventory not found.");
    } else {
      res.json(JSON.parse(data));
    }
  });
});

app.get("/second", (req, res) => {
  fs.readFile("./data/inventories.json", "utf-8", (err, data) => {
    if (err) {
      res.status(404).send("Inventory not found.");
    } else {
      let inventory = JSON.parse(data).find(
        (inventory) => inventory.id === req.params.id
      );
      res.json(inventory);
    }
  });
});

router.post("/", (req, res) => {
  const { details, availablity } = req.body;
  // first we need to read the warehouse file and get the warehouseId of corresponding warehouse passed
  fs.readFile("./data/warehouses.json", "utf-8", (err, data) => {
    if (err) {
      res.status(404).send("Resource not found.");
    } else {
      fs.writeFile(
        "./data/inventories.json",
        JSON.stringify(inventoryData),
        (err) => {
          if (err) alert.log("File could not be written");
        }
      );
      res.json(newItem);
    }
  });
});

app.listen(port, () => console.log(`Listening on ${port}`));

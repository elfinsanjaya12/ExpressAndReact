var express = require("express");
var router = express.Router();
const models = require("../models");

// Get Data All Produks
router.get("/", (req, res, next) => {
  console.log("masuk pak eko");
  models.Produk.findAll()
    .then(produk => {
      res.status(201).json({ message: "Sukses", produk: produk });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "server eror" });
    });
});
module.exports = router;

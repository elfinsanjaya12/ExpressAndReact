const express = require("express");
const router = express.Router();
// controller
const { all, create, update } = require("../controllers/ProductController");

router.get("/all", all);
router.post("/", create);
router.put("/:id", update);

module.exports = router;

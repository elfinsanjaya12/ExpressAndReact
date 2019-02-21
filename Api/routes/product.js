const express = require("express");
const router = express.Router();
// controller
const {
	all,
	create,
	update,
	destroy
} = require("../controllers/ProductController");

router.get("/all", all);
router.post("/", create);
router.put("/:id", update);
router.delete("/:id", destroy);

module.exports = router;

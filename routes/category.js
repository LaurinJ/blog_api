const express = require("express");
const router = express.Router();

const { create, list, read, remove } = require("../controllers/category");

const { runValidation } = require("../validators");
const { categoryCreateValidator } = require("../validators/category");
const { adminMiddleware, requireSignin } = require("../controllers/auth");

router.post(
  "/category",
  categoryCreateValidator,
  runValidation,
  requireSignin,
  adminMiddleware,
  create
);
router.get("/categories", list);
router.get("/category/:slug", read);
router.delete("/category/:slug", requireSignin, adminMiddleware, remove);

module.exports = router;

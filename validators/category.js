const { check } = require("express-validator");

exports.categoryCreateValidator = [
  check("name").not().isEmpty().withMessage("Name is required"),
  //   check("slug").isEmail().withMessage("Must be a valid email address"),
];

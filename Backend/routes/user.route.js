const express = require ("express");
const { modelNames } = require("mongoose");
const { getLandingPage } = require("../controllers/users.controllers");
const router = express.Router();

const {getLandingPage} = require("../controllers/users.controllers")

router.get("/", getLandingPage)

module.exports = router;
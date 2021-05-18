const express = require("express");
const router = express.Router();

const URLModel = require("../models/url-model");

// @route       GET /:code
// @desc        Redirects to long url
router.get("/:slug", async (req, res) => {
  try {
    const url = await URLModel.findOne({ slug: req.params.slug });
    if (url) {
      return res.redirect(url.longURL);
    } else {
      return res.status(404).json("no url found");
    }
  } catch (error) {
    console.error(error);
    res.status(500).json("server error");
  }
});

module.exports = router;

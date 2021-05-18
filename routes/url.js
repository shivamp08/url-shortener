const express = require("express");
const router = express.Router();
const shortID = require("shortid");
const URLModel = require("../models/url-model");
require("dotenv").config();
const { URL } = require("url");

const stringIsAValidUrl = (s, protocols) => {
  try {
    url = new URL(s);
    return protocols
      ? url.protocol
        ? protocols.map((x) => `${x.toLowerCase()}:`).includes(url.protocol)
        : false
      : true;
  } catch (err) {
    return false;
  }
};

// @route       POST api/url/shrink
// @desc        Creates short URL
router.post("/shrink", async (req, res) => {
  const { longURL } = req.body;

  // if (!validURL.isUri(process.env.BASE_URL)) {
  //   return res.status(401).json("invalid base url");
  // }

  //Create URL Slug
  const slug = shortID.generate();

  if (stringIsAValidUrl(longURL, ["http", "https"])) {
    try {
      let url = await URLModel.findOne({ longURL });
      if (url) {
        res.json(url);
      } else {
        const shortURL = process.env.BASE_URL + "/" + slug;
        url = new URLModel({
          slug,
          longURL,
          shortURL,
          date: new Date(),
        });

        await url.save();

        res.json(url);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json("server error");
    }
  } else {
    return res.status(401).json("invalid long url");
  }
});

module.exports = router;

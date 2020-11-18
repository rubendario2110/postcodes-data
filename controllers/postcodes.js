var express = require("express");
var router = express.Router();
let UploadService = require("../services/postcodes");

router.post("/postcodes", (req, res) => {
  new UploadService()
    .postCodes()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((responseError) => {
      res.status(500).json(responseError);
    });
});

module.exports = router;

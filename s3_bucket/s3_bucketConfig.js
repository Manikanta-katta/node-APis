const AWS = require("aws-sdk");
const fs = require("fs");
const s3data = require("./env")

const s3 = new AWS.S3({
  accessKeyId: s3data.envdata.ID,
  secretAccessKey: s3data.envdata.SECRET,
});

module.exports = { s3 };

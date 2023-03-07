const express = require('express')
const app = express()
const serverless = require('serverless-http')
const router = express.Router()

router.get("/get", (req, res) => {
    res.json({
        hello: "hi!"
    });
});
app.use('/.netlify/functions/api',router)
module.exports = app
module.exports.handler = serverless(app)

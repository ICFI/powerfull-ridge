"use strict";

var bodyParser = require("body-parser");
//var ElasticSearchQuery = require("../domain/essearch-query-template.js");


module.exports = function(searchProxy, app) {
    app.use(bodyParser.json()); 
    
    app.get('/api/v0/test', function(req, res) {
      res.send({ test: "true" });
    });
};
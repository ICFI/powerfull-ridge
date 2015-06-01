"use strict";

var bodyParser = require("body-parser");
var ElasticSearchQuery = require("../domain/essearch-query-template.js");


module.exports = function(searchProxy, app) {
    app.use(bodyParser.json()); 
    
    app.get('/api/v0/test', function(req, res) {
      res.send({ test: "true" });
    });
    
    app.get('/api/v0/tagcloud', function(req, res) {
      res.send([{text: "Lorem", weight: 13},
      {text: "Ipsum", weight: 10.5},
      {text: "Dolor", weight: 9.4},
      {text: "Sit", weight: 8},
      {text: "Amet", weight: 6.2},
      {text: "Consectetur", weight: 5},
      {text: "Adipiscing", weight: 5},
      {text: "Elit", weight: 5},
      {text: "Nam et", weight: 5},
      {text: "Leo", weight: 4}]);
    });
    
    app.get('/api/v1/tagcloud', function(req, res) {
      var elasticTemplate = new ElasticSearchQuery();
      var args = elasticTemplate.getCisSignificantTerms();
      searchProxy.doSearch("https://18f-3263339722.us-east-1.bonsai.io/uscis/_search", args)
        .then(searchProxy.parseTermsResults)
        .then(function(collection){
          res.send(collection);
        });
    });    
    
};
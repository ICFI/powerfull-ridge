"use strict";

var Promise = require("bluebird");
var Client = require('node-rest-client').Client;
var ElasticSearchQuery = require("./essearch-query-template.js");

var BaseUrl = "https://18f-3263339722.us-east-1.bonsai.io/uscis/_search";

var options_auth={
  user:process.env.ES_USER,
  password:process.env.ES_PWD,
  mimetypes:{
      json:["application/json","application/json;charset=utf-8"],
      xml:["application/xml","application/xml;charset=utf-8"]
  }
};


var isEven = function(someNumber){
    return (someNumber%2 == 0) ? true : false;
};

exports.doSearch = executeRestClient;

exports.parseTermsResults = function(results){


  //var localResult = JSON.parse(results);
  var resultSet = results.aggregations.months.buckets;

  //console.log("here")

  return new Promise(function(resolve, reject){
    try{
      var wordTrends = [];
      for(var n in resultSet){
        wordTrends[n] = {};
        wordTrends[n].month=resultSet[n].key_as_string;
        wordTrends[n].words=[];
        //console.log('month:' + wordTrends[n].month)

        for(var x in resultSet[n].popular.buckets){
          if(wordTrends[n].words[x]==null)
            wordTrends[n].words[x] = {};
            wordTrends[n].words[x].text=resultSet[n].popular.buckets[x].key
            wordTrends[n].words[x].count=resultSet[n].popular.buckets[x].doc_count
        }
      }
      //console.log("RESULT: " + JSON.stringify(wordTrends));
      resolve(wordTrends);
    }
    catch (e) {
      // reject the promise with caught error
      reject(e);
    }
  });
};



function executeRestClient(url, args) {

  console.log(options_auth);
  var client = new Client(options_auth);
    return new Promise(function(resolve, reject) {
        try {
             var restArgs = {
                data: { },
                headers:{"Content-Type": "application/json", "Accept": "application/json"}
              };
            restArgs.data = args;
            console.log(JSON.stringify(restArgs));
            client.post(url, restArgs, function(data, response) {
              //console.log(JSON.stringify(data));
              var res = {};
              res = data;
              if(Buffer.isBuffer(data)){
                console.log("entered isBuffer")
                res = data.toString('utf8');
              }
              //console.log(res);
              resolve(res);
            });
         }catch (e) {
          // reject the promise with caught error
          console.log(e);
          reject(e);
        }
    });
  }

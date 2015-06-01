var express = require("express");
var app = express();
var expect = require("chai").expect;
var request = require("supertest");
var Promise = require("bluebird");
var bodyParser = require("body-parser");
var ElasticSearchQuery = require("../../server/domain/essearch-query-template.js");


var searchImpl = {
   doSearch: function(){
      return new Promise( function(resolve, reject) {
         resolve({
  "hits": {
    "total": 5388,
    "max_score": 0,
    "hits": [
    ]
  },
  "_shards": {
    "total": 1,
    "successful": 1,
    "failed": 0
  },
  "timed_out": false,
  "aggregations": {
    "months": {
      "buckets": [
        {
          "doc_count": 225,
          "key": 1420070400000,
          "significant": {
            "buckets": [
              {
                "doc_count": 15,
                "key": "republic",
                "score": 1.9404444444444444,
                "bg_count": 15
              },
              {
                "doc_count": 15,
                "key": "slow",
                "score": 1.9404444444444444,
                "bg_count": 15
              },
              {
                "doc_count": 15,
                "key": "ice",
                "score": 1.9404444444444444,
                "bg_count": 15
              },
              {
                "doc_count": 15,
                "key": "refused",
                "score": 1.9404444444444444,
                "bg_count": 15
              },
              {
                "doc_count": 15,
                "key": "told",
                "score": 1.9404444444444444,
                "bg_count": 15
              },
              {
                "doc_count": 15,
                "key": "misrepresentation",
                "score": 1.9404444444444444,
                "bg_count": 15
              },
              {
                "doc_count": 20,
                "key": "going",
                "score": 1.7567305236270756,
                "bg_count": 29
              },
              {
                "doc_count": 15,
                "key": "someone",
                "score": 1.6059259259259258,
                "bg_count": 18
              },
              {
                "doc_count": 11,
                "key": "stay",
                "score": 1.4229925925925928,
                "bg_count": 11
              },
              {
                "doc_count": 15,
                "key": "court",
                "score": 1.3669841269841267,
                "bg_count": 21
              }
            ],
            "doc_count": 225
          },
          "popular": {
            "buckets": [
              {
                "key": "waiver",
                "doc_count": 26
              },
              {
                "key": "f",
                "doc_count": 20
              },
              {
                "key": "going",
                "doc_count": 20
              },
              {
                "key": "k",
                "doc_count": 20
              },
              {
                "key": "does",
                "doc_count": 16
              },
              {
                "key": "filers",
                "doc_count": 16
              },
              {
                "key": "n",
                "doc_count": 16
              },
              {
                "key": "being",
                "doc_count": 15
              },
              {
                "key": "center",
                "doc_count": 15
              },
              {
                "key": "court",
                "doc_count": 15
              }
            ],
            "doc_count_error_upper_bound": 0,
            "sum_other_doc_count": 795
          },
          "key_as_string": "2015-01"
        },
        {
          "doc_count": 353,
          "key": 1422748800000,
          "significant": {
            "buckets": [
              {
                "doc_count": 43,
                "key": "dec",
                "score": 1.929522075664925,
                "bg_count": 49
              },
              {
                "doc_count": 15,
                "key": "deffered",
                "score": 0.77293774927974712,
                "bg_count": 15
              },
              {
                "doc_count": 15,
                "key": "prosecution",
                "score": 0.77293774927974712,
                "bg_count": 15
              },
              {
                "doc_count": 15,
                "key": "acces",
                "score": 0.77293774927974712,
                "bg_count": 15
              },
              {
                "doc_count": 15,
                "key": "dismiss",
                "score": 0.77293774927974712,
                "bg_count": 15
              },
              {
                "doc_count": 15,
                "key": "expedites",
                "score": 0.77293774927974712,
                "bg_count": 15
              },
              {
                "doc_count": 15,
                "key": "drop",
                "score": 0.77293774927974712,
                "bg_count": 15
              },
              {
                "doc_count": 15,
                "key": "plz",
                "score": 0.63703263809195165,
                "bg_count": 18
              },
              {
                "doc_count": 28,
                "key": "pd",
                "score": 0.57636977697005454,
                "bg_count": 65
              },
              {
                "doc_count": 15,
                "key": "updated",
                "score": 0.56908008249805386,
                "bg_count": 20
              }
            ],
            "doc_count": 353
          },
          "popular": {
            "buckets": [
              {
                "key": "interview",
                "doc_count": 50
              },
              {
                "key": "dec",
                "doc_count": 43
              },
              {
                "key": "filers",
                "doc_count": 41
              },
              {
                "key": "help",
                "doc_count": 41
              },
              {
                "key": "processing",
                "doc_count": 38
              },
              {
                "key": "center",
                "doc_count": 36
              },
              {
                "key": "n",
                "doc_count": 31
              },
              {
                "key": "service",
                "doc_count": 30
              },
              {
                "key": "status",
                "doc_count": 30
              },
              {
                "key": "pd",
                "doc_count": 28
              }
            ],
            "doc_count_error_upper_bound": 0,
            "sum_other_doc_count": 1063
          },
          "key_as_string": "2015-02"
        },
        {
          "doc_count": 689,
          "key": 1425168000000,
          "significant": {
            "buckets": [
              {
                "doc_count": 54,
                "key": "married",
                "score": 0.2571873965224124,
                "bg_count": 124
              },
              {
                "doc_count": 30,
                "key": "february",
                "score": 0.24184731663440209,
                "bg_count": 45
              },
              {
                "doc_count": 17,
                "key": "starting",
                "score": 0.21790693902313149,
                "bg_count": 17
              },
              {
                "doc_count": 108,
                "key": "help",
                "score": 0.19662407944420912,
                "bg_count": 471
              },
              {
                "doc_count": 15,
                "key": "pd's",
                "score": 0.19227082854982186,
                "bg_count": 15
              },
              {
                "doc_count": 15,
                "key": "kind",
                "score": 0.19227082854982186,
                "bg_count": 15
              },
              {
                "doc_count": 15,
                "key": "figure",
                "score": 0.19227082854982186,
                "bg_count": 15
              },
              {
                "doc_count": 15,
                "key": "hi",
                "score": 0.19227082854982186,
                "bg_count": 15
              },
              {
                "doc_count": 15,
                "key": "afterwards",
                "score": 0.19227082854982186,
                "bg_count": 15
              },
              {
                "doc_count": 15,
                "key": "immediately",
                "score": 0.19227082854982186,
                "bg_count": 15
              }
            ],
            "doc_count": 689
          },
          "popular": {
            "buckets": [
              {
                "key": "help",
                "doc_count": 108
              },
              {
                "key": "interview",
                "doc_count": 62
              },
              {
                "key": "married",
                "doc_count": 54
              },
              {
                "key": "status",
                "doc_count": 45
              },
              {
                "key": "n",
                "doc_count": 33
              },
              {
                "key": "student",
                "doc_count": 33
              },
              {
                "key": "filers",
                "doc_count": 31
              },
              {
                "key": "getting",
                "doc_count": 31
              },
              {
                "key": "february",
                "doc_count": 30
              },
              {
                "key": "me",
                "doc_count": 30
              }
            ],
            "doc_count_error_upper_bound": 0,
            "sum_other_doc_count": 2240
          },
          "key_as_string": "2015-03"
        },
        {
          "doc_count": 1491,
          "key": 1427846400000,
          "significant": {
            "buckets": [
              {
                "doc_count": 124,
                "key": "ap",
                "score": 0.12693548120929565,
                "bg_count": 223
              },
              {
                "doc_count": 52,
                "key": "days",
                "score": 0.073537486701422128,
                "bg_count": 76
              },
              {
                "doc_count": 92,
                "key": "processing",
                "score": 0.071927763101441666,
                "bg_count": 193
              },
              {
                "doc_count": 28,
                "key": "drivers",
                "score": 0.066540085583926115,
                "bg_count": 28
              },
              {
                "doc_count": 26,
                "key": "uk",
                "score": 0.061787222327931386,
                "bg_count": 26
              },
              {
                "doc_count": 25,
                "key": "congressman",
                "score": 0.059410790699934025,
                "bg_count": 25
              },
              {
                "doc_count": 24,
                "key": "half",
                "score": 0.057034359071936658,
                "bg_count": 24
              },
              {
                "doc_count": 22,
                "key": "overwhelmed",
                "score": 0.052281495815941922,
                "bg_count": 22
              },
              {
                "doc_count": 21,
                "key": "been",
                "score": 0.049905064187944569,
                "bg_count": 21
              },
              {
                "doc_count": 78,
                "key": "citizen",
                "score": 0.048990449607962124,
                "bg_count": 183
              }
            ],
            "doc_count": 1491
          },
          "popular": {
            "buckets": [
              {
                "key": "interview",
                "doc_count": 131
              },
              {
                "key": "ap",
                "doc_count": 124
              },
              {
                "key": "processing",
                "doc_count": 92
              },
              {
                "key": "citizen",
                "doc_count": 78
              },
              {
                "key": "green",
                "doc_count": 78
              },
              {
                "key": "card",
                "doc_count": 75
              },
              {
                "key": "aos",
                "doc_count": 65
              },
              {
                "key": "help",
                "doc_count": 65
              },
              {
                "key": "days",
                "doc_count": 52
              },
              {
                "key": "time",
                "doc_count": 50
              }
            ],
            "doc_count_error_upper_bound": 0,
            "sum_other_doc_count": 5159
          },
          "key_as_string": "2015-04"
        },
        {
          "doc_count": 2630,
          "key": 1430438400000,
          "significant": {
            "buckets": [
              {
                "doc_count": 87,
                "key": "form",
                "score": 0.037516608389803037,
                "bg_count": 105
              },
              {
                "doc_count": 76,
                "key": "citizenship",
                "score": 0.033263875594399375,
                "bg_count": 91
              },
              {
                "doc_count": 62,
                "key": "parole",
                "score": 0.030205637124806114,
                "bg_count": 70
              },
              {
                "doc_count": 74,
                "key": "name",
                "score": 0.028314363523056801,
                "bg_count": 95
              },
              {
                "doc_count": 47,
                "key": "she",
                "score": 0.028158278997816939,
                "bg_count": 47
              },
              {
                "doc_count": 158,
                "key": "green",
                "score": 0.027552109007748973,
                "bg_count": 279
              },
              {
                "doc_count": 83,
                "key": "nvc",
                "score": 0.027107815954244403,
                "bg_count": 115
              },
              {
                "doc_count": 60,
                "key": "should",
                "score": 0.026843010963757068,
                "bg_count": 71
              },
              {
                "doc_count": 162,
                "key": "aos",
                "score": 0.02672541614420262,
                "bg_count": 291
              },
              {
                "doc_count": 87,
                "key": "me",
                "score": 0.026699409440831927,
                "bg_count": 124
              }
            ],
            "doc_count": 2630
          },
          "popular": {
            "buckets": [
              {
                "key": "interview",
                "doc_count": 199
              },
              {
                "key": "help",
                "doc_count": 196
              },
              {
                "key": "aos",
                "doc_count": 162
              },
              {
                "key": "green",
                "doc_count": 158
              },
              {
                "key": "card",
                "doc_count": 155
              },
              {
                "key": "status",
                "doc_count": 105
              },
              {
                "key": "dv",
                "doc_count": 103
              },
              {
                "key": "question",
                "doc_count": 102
              },
              {
                "key": "case",
                "doc_count": 91
              },
              {
                "key": "form",
                "doc_count": 87
              }
            ],
            "doc_count_error_upper_bound": 0,
            "sum_other_doc_count": 9878
          },
          "key_as_string": "2015-05"
        }
      ]
    }
  },
  "took": 230
});
      });
   },
   parseTermsResults: function(results){


  var wordTrends = [{"foo":"1"}, {"bar":"2"}]
  return new Promise(function(resolve, reject){
    try{ 
      //console.log("RESULT: " + JSON.stringify(wordTrends));
      resolve(wordTrends);
    } 
    catch (e) {
      // reject the promise with caught error
      reject(e);
    } 
  });
}
}

var elasticService = require("../../server/services/rest-client-service")(searchImpl, app);

describe("The Elastic Search REST client service wrapper", function() {
   it("should search the remote server returning a result as an array", function(done){
   request(app).get('/api/v1/tagcloud')
   .expect('Content-Type', /json/)
   .end(function(err, res){
      searchImpl.parseTermsResults(res.body)
      .then(function(collection){
          expect(collection).to.be.a('Array');
          done();
      });
    });
   });
})
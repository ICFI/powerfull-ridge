// Constructor
function ElasticSearchQuery() {
  // initialize instance properties
  this.queryTemplate = {
        "query": {
            "filtered": {
                "query": {
                    "match_all": {}
                }
            }
        },
        "highlight": {
            "fields": {
                "title": {},
                "description": {}
            },
            "fragment_size": 150,
            "pre_tags": [
                "<em class=\"highlight\">"
            ],
            "post_tags": [
                "</em>"
            ]
        },
        "size": 500,
        "sort": [
            {
                "_score": {
                    "order": "desc",
                    "ignore_unmapped": true
                }
            }
        ]
    };
    
    this.filterTemplate = { "bool": { } };
    
    this.cisSignificantTermsTemplate = {
      "query": {
        "filtered": {
          "query": {
            "bool": {
              "must": [
                    { "range": {"@timestamp": {"gte": "2015-01-01","lte": "2015-12-31"}  		}
    	              }
              			]
             }
    	   }
    
    	  }
    
     	},
     	"aggs": {
    
    		"months": {
             "date_histogram": {
                "field": "@timestamp",
                "interval": "month",
                "format": "yyyy-MM"
    			},
    			"aggs" : {
    				"popular" : {"terms" :
    									{"field" : "post_title",
    										"exclude" : "how|what|after|still|may|need|just|us|about|all|would|can|get|do|visa|i|have|my|so|.*[0-9].*|lee|fairfax|.*icf.*|a|an|and|are|as|at|be|but|by|for|if|in|into|is|it|no|not|of|on|or|s|such|t|that|the|their|then|there|these|they|this|to|was|will|with|fw|re|meeting|review|please|request|call|weekly|2|2014|request|call|from|project|development|e|daily|timesheet|you|your|signed|employee|steve|ziegler|icfi|icf|international|hyperlink|http|icfi.com",
    										"size" : 10
    								}
    							},
    				"significant" : {"significant_terms" :
    									{"field" : "post_title",
    										"exclude" : "how|what|after|still|may|need|just|us|about|all|would|can|get|do|visa|i|have|my|so|.*[0-9].*|lee|fairfax|.*icf.*|a|an|and|are|as|at|be|but|by|for|if|in|into|is|it|no|not|of|on|or|s|such|t|that|the|their|then|there|these|they|this|to|was|will|with|fw|re|meeting|review|please|request|call|weekly|2|2014|request|call|from|project|development|e|daily|timesheet|you|your|signed|employee|steve|ziegler|icfi|icf|international|hyperlink|http|icfi.com",
    										"size" : 10
    								}
    							}
    						}
    					}
    			  },
         "size" : 0
       }


    
}

// class methods
ElasticSearchQuery.prototype.getQuery = function() {
  return this.queryTemplate;
};

ElasticSearchQuery.prototype.getFilter = function() {
  return this.filterTemplate;
};

ElasticSearchQuery.prototype.getCisSignificantTerms = function() {
  return this.cisSignificantTermsTemplate;
};
// export the class
module.exports = ElasticSearchQuery;
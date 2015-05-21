var expect = require("chai").expect;
var Promise = require("bluebird"); //
var searchData = require("../../server/domain/rest-client-domain.js");

var ElasticSearchQuery = require("../../server/domain/essearch-query-template.js");

var args = new ElasticSearchQuery();

describe("The Elastic Search API Interface", function() {
    
    it("should be able to read the environment variables for authenticating against the search server", function(done){
        
        //MUST BE SET IN THE TEST ENVIRONMENT BEFORE EXECUTION
        //console.log(process.env.ES_USER);
        expect(process.env.ES_USER).to.be.a("string");
        expect(process.env.ES_USER).to.have.length(10);
        expect(process.env.ES_PWD).to.be.a("string");
        expect(process.env.ES_PWD).to.have.length(10);
        done();
    });
    //process.env.ES_USER
    //process.env.ES_PWD
    
});
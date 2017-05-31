var elasticsearch=require('elasticsearch');

var client = new elasticsearch.Client( {  
  host: [
    'http://[172.104.34.241]:[9200]/'//,
    //'https://[username]:[password]@[server]:[port]/'
  ]
});

module.exports = client;  

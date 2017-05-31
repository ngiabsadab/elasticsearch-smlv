var client = require('./connect_elastics.js');

client.cluster.health({},function(err,resp,status) {  
  console.log("-- Client Health --",resp);
});
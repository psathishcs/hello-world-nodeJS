var solr = require('solr-client');
var options = {
    host: '127.0.0.1', 
    port : 8983, 
    core: 'techproducts', 
    protocol : 'http'
};
var client = solr.createClient(options);

client.add({id : 007, name: 'Amsa'}, function(error, result){
    if (error){
        console.info(error);
    }else {
        console.info(result);
    }
});

// install solr client package: `npm install solr --save`
var solr = require( 'solr-client' );

var client = solr.createClient({
    host: '127.0.0.1',
    port: 8983,
    core: 'techproducts',
    solrVersion: '7.3.0'
});

// Add a new document
client.add({ id : 12, title_t : 'Hello' },function(err,obj){
   if(err){
      console.log(err);
   }else{
      console.log('Solr response:', obj);
   }
});

// Switch on "auto commit", by default `client.autoCommit = false`
client.autoCommit = true;

var docs = [];
for(var i = 0; i <= 10 ; i++){
   var doc = {
       id : 12345 + i,
       title_t : "Title "+ i,
       description_t : "Text"+ i + "Alice"
   }
   docs.push(doc);
}

// Add documents
client.add(docs,function(err,obj){
   if(err){
      console.log(err);
   }else{
      console.log(obj);
   }
});
const request = require('request');
var userDetail;

function initalize(){
    var options = {
        url: 'httsps://api.github.com/users/psathishcs',
        headers: {
            'User-Agent': 'request'
        }
    };

    return new Promise(function(resolve, reject){
        request.get(options, function(err, resp, body){
            if (err){
                reject(err);
            }else {
                resolve(JSON.parse(body));
            }
        })
    })
}

function main(){
        //Chaining then() calls
        var initalizePromise = initalize();
        initalizePromise.then(result => {
            userDetail = result;
            console.log('Initalizeed user detail chain 1-------------------');
            console.log(userDetail);
            return userDetail;
        }).then(result => {
            console.log('Initalizeed user detail chain 2-------------------');
            console.log(result.location);
            console.log(result.name);
            console.log(result.avatar_url);
            userDetail = {};
        }).catch(err => {
            console.log('Logging error ---------!');
            console.log(err);
        })
}

main();
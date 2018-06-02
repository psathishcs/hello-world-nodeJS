const request = require('request');
var userDetail;

function initalize(){
    var options = {
        url: 'https://api.github.com/users/psathishcs',
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
    var initalizePromise = initalize();
    initalizePromise.then(function(result){
        userDetail = result;
        console.log('Initalizeed user detail -------------------');
        console.log(userDetail);
        userDetail = {};
    }, function(err){
        console.log(err);
    })
    // using Arror operaction
    var initalizePromise1 = initalize();
    initalizePromise1.then(result => {
        userDetail = result;
        console.log('Initalizeed user detail Arror -------------------');
        console.log(userDetail);
        userDetail = {};
    }, err => {
        console.log(err);
    })

    //using CATCh

    var initalizePromise2 = initalize();
    initalizePromise2.then(result => {
        userDetail = result;
        console.log('Initalizeed user detail Arror CATch-------------------');
        console.log(userDetail);
        userDetail = {};
    }).catch(err => {
        console.log(err);
    })
}

main();
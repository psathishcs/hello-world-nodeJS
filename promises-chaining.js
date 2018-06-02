const axios = require('axios');
function getTweets(uid){
    return axios.get('https://api.github.com/users/psathishcs/', uid)
        .then((responce) => {
            return responce.data
        })
        .then((responce) => {
            return responce.data;
        }).then((tweets)=> {
            return tweets.filter((tweet) => {
                return tweet.stars > 50
            })
        }).catch(error => {
            console.log(error);
          });
    }
getTweets('psathishcs'); 
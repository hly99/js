var request = require('request')
var cheerio = require('cheerio')
var tian='http://t.weather.sojson.com/api/weather/city/101030100';
request(tian,
function(err,res,body){
    var pv=/\d\d\d\d\-\d\d\-\d\d/g
    var pd=/高温 \d\d\.\d/g
    var add=body.match(pd);
    var arr=body.match(pv)
    arr.shift()
    var MAP=new Map();
    for(var i=0;i<add.length;i++){
        MAP.set(arr[i],add[i])
    }
    console.log(MAP)
});
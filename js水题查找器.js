var request = require('request')
var cheerio = require('cheerio')
var URL_36KR = 'http://acm.zzuli.edu.cn/userinfo.php?user=jy18304113';
var url='http://acm.zzuli.edu.cn/userinfo.php?user=jy18304128';
request(URL_36KR, 
function(err, res, body) { 
  var pd=/p\(\d\d\d\d/g;
  request(url,
  function(e,r,b){
    var add=b.match(pd);
    var arr=body.match(pd)
    var x=[]
    var y=[]
    for(var i=0;i<add.length;i++){
      if(arr.indexOf(add[i])==-1){
        x.push(add[i].slice(2))
      }
    }
    for(var j=0;j<arr.length;j++){
      if(add.indexOf(arr[j])==-1){
        y.push(arr[j].slice(2))
      }
    }
    console.log(...x)
    console.log("     ")
    console.log(...y)
  });
}); 














var array1 = []
var j = 0
var request=new XMLHttpRequest(); 
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload=function(){
    var data=JSON.parse(this.response)
    for (var i=0;i<data.length;i++)
    {
        if(data[i].latlng[0] === undefined &&
            data[i].latlng[1] === undefined)
            {
                lat = 0
                lang = 0
            }
            else
            {
                lat = data[i].latlng[0]
                lang = data[i].latlng[1]
            }
        Weathercall(lat,lang,data[i].name)
    }
    }
    function Weathercall(lat,lang,countryname)
    {
         var request1=new XMLHttpRequest(); 
         var apinew = 'https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lang+'&appid=fe6b98ff9b9bc2c5d96f1d3cb5d1e446';
         request1.open('GET',apinew,true);
         request1.send();
         request1.onload=function(){
         var data1=JSON.parse(this.response)
         var kel = parseInt(data1.main.temp)
         var cel = (kel - 273.15).toFixed(2,0)
         console.log(countryname+':'+cel)
                 }
        }



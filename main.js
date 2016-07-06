var express = require('express');
var app = express();

app.get("/:time", (req, res) => {
    var timeNum = Number(req.params.time);
    var date;
    var month, day, year;
    var result, unixTime, natural;
    
    var arrMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    if(timeNum)
        date = new Date(timeNum);
    else
        date = new Date(req.params.time);
    
    unixTime = date.getTime() + "";
    month = arrMonths[date.getMonth()];
    day = date.getDate();
    year = date.getFullYear();
    
    if(day){
        natural = month + " " + day + ", " + year;
    }
    else{
        natural = null;
        unixTime = null;
    }
    
        
    result = {
        unix: unixTime,
        natural: natural
    };
    
    res.send(result);
    res.end();
    
}); 


app.listen(process.env.PORT);
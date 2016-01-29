/**
 * Created by alejandraneolopan on 1/29/2016.
 */
/**
 * Return Date actual
 * @param None
 * @returns {Date time}
 */
var GetNow=function(){
    var datetim=new Date(Date.now());
    var numDay=datetim.getDay();
    var day='';
    switch (numDay){
        case 1:
            day='Monday';
            break;
        case 2:
            day='Tuesday';
            break;
        case 3:
            day='Wednesday';
            break;
        case 4:
            day='Thursday';
            break;
        case 5:
            day='Friday';
            break;
        case 6:
            day='Saturday';
            break;
        case 7:
            day='Sunday';
            break;
    }
    console.log('Today is ',day);
    console.log('Current time is :',datetim.toLocaleTimeString().split(" ")[0].split(":")[0],"",datetim.toLocaleTimeString().split(" ")[1],"",datetim.toLocaleTimeString().split(" ")[0].split(":")[1],":",datetim.toLocaleTimeString().split(" ")[0].split(":")[2]);

};

GetNow();
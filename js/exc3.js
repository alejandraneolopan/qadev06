/**
 * Created by alejandraneolopan on 1/29/2016.
 */
/**
 * Return Date actual
 * @param void
 * @returns {Date time}
 */



//LOOPS with JavaScript
var findCapicuaNumbers=function(ini,fin){
    var dig,numberCopy,newnumber;
    for(var i=ini;i<=fin;i++)
    {
        numberCopy=i;
        newnumber=0;
        while (numberCopy!=0)
        {
            dig=numberCopy%10;
            newnumber=newnumber*10 + dig;
            numberCopy=parseInt(numberCopy/10);
        }
        if(i===newnumber)
        {
            console.log("Capicua:",newnumber);
        }

    }

};
findCapicuaNumbers(105,200)


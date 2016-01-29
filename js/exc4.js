/**
 * Created by alejandraneolopan on 1/29/2016.
 */
/**
 * Created by alejandraneolopan on 1/29/2016.
 */
/**
 * Return FACTORIAL of a NUMBER
 * @param numToFact is a integer
 * @returns {int }
 */

var getFactorial=function(numToFact){
    numToFact=parseInt(numToFact);
    var factor =1;
    for(var i=2;i<numToFact;i++)
    {
       factor=factor*i;
    }
 console.log("The factorial of ",numToFact," is ", factor);

};

var truncateLettersByLeft=function(text,numberToTrunc){
    var newText="";
    if(numberToTrunc<text.length && numberToTrunc>0)
    {
        for(var i=numberToTrunc; i<text.length;i++)
        {
            newText=newText+text[i];
        }

    }

    console.log("New Text truncated:",newText)
};


getFactorial(10);
truncateLettersByLeft("Hola mundo",3);
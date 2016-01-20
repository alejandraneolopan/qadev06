/**
 * Created by alejandraneolopan on 1/19/2016.
 */
var operations=function(parameters){
    //Max, min, average, total
    //var sum=0;
    //parameters.length
     console.log('MAX is ',getMaximum(arguments,0));
    console.log('MIN is ',getMinimum(arguments,0));
    console.log('AVG is ',getAvg(arguments));
    console.log('SUM is ',getSum(arguments,0));

};

var getMaximum=function(params,n)
{
    if(!params[n])
    {
        return 0;
    }
    else
    {  var aux= getMaximum(params,n+1);
        if (params[n]>aux)
        {return params[n];}
        else
        {return aux;}
    }
}
var getMinimum=function(params,n)
{
    if(!params[n])
    {return 9999;}
    else
    {
        var aux=getMinimum(params,n+1);
        if (params[n]<aux)
        {return params[n];}
        else
        {return aux;}
    }
};
var getAvg=function(params)
{
    return getSum(params,0)/params.length;
};

var getSum=function(params,n)
{
    if (!params[n])
    {return 0;}
    else
    {
        return params[n]+getSum(params,n+1);
    }
};


operations(5,4,3,2);
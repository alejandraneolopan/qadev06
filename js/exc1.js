/**
 * @Class: MathNumbers
 * @Description: Contain a set of numbers, it contains the methods: Maximum, minimum, avg,sum over whole set
 * @Created: alejandraneolopan
 * @Date: 1/19/2016.
 */

 var MathNumbers=function(){//arguments n, no hay forma de decir varios...
    //Properties
    this.numbers=arguments;
    //Methods
    this.doOpe=function(){
        
        if (arguments.length>0)
        {
         //If there is arguments mathe.doOpe(1,2,3)   
            this.doSum.apply(this, arguments);
            this.doAvg.apply(this, arguments);
            this.getMaximum.apply(this, arguments);
            this.getMinimum.apply(this, arguments);
        }
        else
        {//If the object call mathe=new MatNumbers(1,2,3); mathe.doOpe()
            if (this.numbers.length>0)
            {
            //Display all operations in console
            this.doSum();
            this.doAvg();
            this.getMaximum();
            this.getMinimum();
            }
            else
                {console.log('There is not numbers for the operations');}
        }
    };

    this.doSum=function()
    {
       
        if (arguments.length>0)
        {console.log('SUM is ',getSum(arguments,0));}
        else
        {
             if (this.numbers.length>0)
            {console.log('SUM is ',getSum(this.numbers,0));}
            else
                {console.log('There is not numbers for the sum');}
        }
    };
   
    this.doAvg=function()
    {
        if (arguments.length>0)
        {console.log('AVG is ',getAvg(arguments));
        }
        else
        {
            if (this.numbers.length>0)
            {console.log('AVG is ',getAvg(this.numbers));}
            else
                {console.log('There is not numbers for the Average.');}
        }
    };
    this.getMaximum=function()
    {
        if (arguments.length>0)
        {console.log('MAX is ',getMaximum(arguments,0));}
        else
        {
            if (this.numbers.length>0)
            {console.log('MAX is ',getMaximum(this.numbers,0));}
            else
                {console.log('There is not numbers for the Maximum.');}
        }
    };
    this.getMinimum=function()
    {
        if (arguments.length>0)
        {console.log('MIN is ',getMinimum(arguments,0));}
        else
        {
            if (this.numbers.length>0)
            {
            console.log('MIN is ',getMinimum(this.numbers,0));}
            else
                {console.log('There is not numbers for the Minimum.');}
        }
    };
};
//Methods independent
//Maximum using recursive methods
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
};
//Minimum using recursive methods
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
//Average
var getAvg=function(params)
{
    return getSum(params,0)/params.length;
};
//Sum using recursive methods
var getSum=function(params,n)
{
    if (!params[n])
    {return 0;}
    else
    {
        return params[n]+getSum(params,n+1);
    }
};

var mathe=new MathNumbers();
mathe.doOpe(1,2,3);

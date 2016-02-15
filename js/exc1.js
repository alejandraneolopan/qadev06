var MathNumbers=function() {
this.params=arguments;
};
MathNumbers.prototype.doOpe=function()
{
    obj2.doOpe.apply(this.arguments);
    obj2.doSum.apply(this.arguments);
    obj2.getMaximum.apply(this.arguments);
    obj2.getMinimum.apply(this.arguments);
    obj2.doAvg.apply(this.arguments);
};
MathNumbers.prototype.doSum=function(){
    if (arguments.length>1)
    {}
    else
    {//params
     }
};
MathNumbers.prototype.getMaximum=function(){};
MathNumbers.prototype.getMinimum=function(){};
MathNumbers.prototype.doAvg=function(){};
MathNumbers.prototype.doOpe=function(){};



var obj=new MathNumbers(1,2,3,4);
obj.doOpe();

var obj2=new MathNumbers();
obj2.doOpe(4,7,1);
obj2.doSum(3,4,5);
obj2.getMaximum(3,4,5);
obj2.getMinimum(3,4,5);
obj2.doAvg(3,4,5);

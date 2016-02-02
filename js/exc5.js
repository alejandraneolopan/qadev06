/**
 * Created by alejandraneolopan on 2/1/2016.
 */
/** This file contains anonymous functions.
 * Return
 * @param
 * @returns {void}
 */
//No anonymous
/*var askQuestion=function(){
    console.log ("How are you?");
};
var sayHello=function(){
    console.log ("Hello world!");
    askQuestion();
};

sayHello();*/
//Anonymous
/*var sayHello=function(cb){
    console.log ("Hello world!");
   cb();
};
sayHello(function(){
    console.log ("How are you?");
});*/
var sayHello=function(){
    if (arguments.length===2)
    {
        console.log ('Hello world! '+ arguments[1]);
        var anonymousFunc=arguments[0];
        anonymousFunc.apply(this, arguments);

    }
    else
    {
        console.log ('Hello world!');
        var anonymousFunc=arguments[0];
        anonymousFunc();

    }

};
sayHello(function(){
    if (arguments.length===1)
    {
        console.log ('How are you? '+ arguments[0]);

    }
    else {
        console.log('How are you?');
    }

});

sayHello(function(){
    if (arguments.length===2)
    {
        console.log ('How are you? '+ arguments[1]);

    }
    else {
        console.log('How are you?');
    }

},'Alejandra');
var a= 1,b=3;
(function (a,b)
    {
        var res=a+b;
        console.log('Sum is',res);
    }

)(a,b);



/**
 * Created by alejandraneolopan on 1/12/2016.
 */
console.log('This is a line from js');

/**
 * Return hello
 * @param name
 * @returns {string}
 */
sayHello=function(name){
    if (name)
    {
        return 'Hello '+name;
    }
    return 'Hello world';
};

var greeting =sayHello('Alejandra');
console.log(greeting);
//logic's operator == equal
//  === equal value and type

//this --la instancia actual

//x=3 number x ={} object could be JSON
//Defining a class
var Pet=function(){};//constructor
var Pet=function(name){//arguments n, no hay forma de decir varios...
    //Properties
    this.age=1;
    this.name=name;
    //Methods
    this.bark=function(){
        console.log(name  +' is barking ')
    };
    //SI QUISIERAMOS USAR VARIOS CONSTRUCTORES???
    draw=function()
    {
        console.log('Drawing');
    }

};//constructor

var Student=function(name,lastName,age,course,module){
    name? this.name=name:this.name='';
    lastName? this.lastName=lastName:this.lastName='';
    age? this.age=age:this.age=0;
    course? this.course=course:this.course='';
    module? this.module=module:this.module='';

    this.GetFullName=function(){
        return name+ ' '+ lastName;
    };
var age='';
    var calculateAge1=function(){
        age=2016-1986;
        return age;
    };
    console.log(age);
    var calculateAge=function(){
     var age2=2016-1987;
    };
    console.log(age);

};

var student=new Student('Toto','Perez',20);
console.log(student.GetFullName());
var CountWords=function(paramParagraph){
    return paramParagraph.split(' ').length;

};
var paragraph='I have a table that contains information about customers including how they were referred. For example MyTable (EDIT: My over simplification resulted in answers that would not work. They are good answers, but do not solve my problem. I have added the last piece of the puzzle for clarity): ';
var cantWords=CountWords(paragraph);
console.log('Total words: ',cantWords);


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


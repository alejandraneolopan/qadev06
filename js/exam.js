/**
 * @class JSTest (using prototype) which has methods for the exam
 *      By default has parameters for doOperations.
 *      numberToTest {int} parameter for factorial and primes
 *      paragraph {string} parameter for count vowels and eval regular expressions
 * @author Developed by Alejandra Neolopan
 */
var JSTest=function()
{
    this.numberToTest = 3;
    this.paragraph = 'hello world how are you, hows going';
    this.charToFind = 'ho';
};
/*
* @param {int} nPrimes amount of primes displayed in console
* @return {void} Show in console the first n primes, by default is numberToTest
*/
JSTest.prototype.getPrimeNumbers=function(nPrimes){
    var iniInteger = 1 ;
    var countPrimes = 0;
    var isPrime;
    while (countPrimes < nPrimes)
    {
        //Evaluate if is prime
        isPrime = true;
        for (var i = 2; i <= Math.sqrt(iniInteger); i++ )
        {
            if (iniInteger % i === 0)
                isPrime = false;
        }

        if (isPrime)
        {
            countPrimes++;
            console.log('Prime [' +countPrimes + ']:' + iniInteger)   ;
        }
        //Next value
        iniInteger++;

    }
};
/*
 * @param {int} numberFact number which we desired the factorial
 * @return {void} Show in console the Factorial of a number
 */
JSTest.prototype.getFactorial=function(numberFact){
    var factorial = 1;
    for (var i = 2;i <= numberFact; i++)
    {
        factorial=factorial*i;
    }
    console.log('Factorial of ' + numberFact + '=' + factorial);
};
/*
 * @param {string} paragraph is the source from count the total vowels
 * @return {void} Show in console amount total of vowels in the paragraph
 */
JSTest.prototype.countVowels=function(paragraph){
    var countVowels=0;
    var paragraphToTest=paragraph.toLowerCase();
    for (var i =0; i <= paragraphToTest.length; i++)
    {
        if (paragraphToTest.charAt(i)==='a'|| paragraphToTest.charAt(i)==='e' ||paragraphToTest.charAt(i)==='i'|| paragraphToTest.charAt(i)==='o'|| paragraphToTest.charAt(i)==='u')
        countVowels++;
    }
    console.log('"'+paragraph+'"');
    console.log ('The paragraph contains '+ countVowels + ' vowels');
};
/*
 * @param {string} paragraph is the source from we will search a char or regular expression
 * @return {void} Show in console the ocurrences with the regular expression and the word where is placed.
 */
JSTest.prototype.evalParagraph=function(paragraph, stringToFind){
    var aRegExp=new RegExp(stringToFind);
    var countMatches =0;

    var i=0;
    var match= aRegExp.exec(paragraph);
    console.log(match[0]);
    console.log(match[1]);
    match= aRegExp.exec(paragraph);
    console.log(match[0]);
    console.log(match[1]);
    var matches=[];//
      while (match[i]) {
        matches.push(match[i]);
i++;
          countMatches++;
          //match = aRegExp.exec(paragraph)
    }
    console.log('Count is: '+ countMatches);
    console.log('Words:');
    for (var j = 0; j < matches.length;j++)
        console.log(matches[i]);


};
/*
 *
 * @return {void} Uses all previous functions
 */
JSTest.prototype.doOperations=function(){

    this.getPrimeNumbers(this.numberToTest);
    this.getFactorial(this.numberToTest);
    this.countVowels(this.paragraph);
    this.evalParagraph(this.paragraph,this.charToFind);
};


var test=new  JSTest();
test.doOperations();
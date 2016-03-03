/**
 * Created by alejandraneolopan on 3/3/2016.
 */
    /*
    * @class calculator
    * result {double} This contain the final or partial result of the operations
    * */
var Calculator=function()
{
    this.result = 0;
    this.numbers=[7,8,9,'C',4,5,6,'/',1,2,3,'*',0,'=','+','-'];
    this.number1=0;
    this.number2=0;
    this.operator='+';
    this.writeNumber=true;
};
Calculator.prototype.draw=function()
{
    var myCalcTable=$('<table><tr><td><input type="text" name="result" value="0"></td></tr></table>');
    var myCalcRows,myCalcCols,myCalcColsAux,index=0;
    for (var i=0; i < 4; i++)
    {
        myCalcRows=$('<tr></tr>');
        myCalcCols=$('<td></td>');
        myCalcColsAux=$('<td></td>');
        var myCalcButton=$('<button></button>');
        myCalcButton.text(this.numbers[index]);
        myCalcButton.attr('typeButton','number');
        myCalcButton.attr('value',this.numbers[index]);
        myCalcCols.append(myCalcButton);

        for (var j=1; j < 4; j++)
        {
            index++;
            myCalcButton.text(this.numbers[index]);
            if ($.isNumeric(this.numbers[index]))
            {
                myCalcButton.attr('typeButton','number');
                myCalcButton.on('click',this.pressNumber);
            }
            else
            {
                switch (this.numbers[index])
                {
                    case 'C':
                        myCalcButton.attr('typeButton','clear');
                        myCalcButton.on('click',this.pressClear);
                        break;
                    case '=':
                        myCalcButton.attr('typeButton','equal');
                        myCalcButton.on('click',this.pressEqual);
                        break;
                    default:
                    {
                        myCalcButton.attr('typeButton','operator');
                        switch (this.numbers[index])
                        {
                            case '+':
                                myCalcButton.on('click',this.doSum);
                                break;
                            case '-':
                                myCalcButton.on('click',this.doRest);
                                break;
                            case '*':
                                myCalcButton.on('click',this.doMult);
                                break;
                            case '/':
                                myCalcButton.on('click',this.doDiv);
                                break;

                        }
                    }
                }

            }

            myCalcButton.attr('value',this.numbers[index]);
            myCalcColsAux.append(myCalcButton);
            myCalcCols=$(myCalcCols[0]+myCalcColsAux[0]);

        }
        myCalcRows.append($(myCalcCols));
        myCalcTable.append(myCalcRows);
    }
    $('body').append(myCalcTable);

};

/*
 *
 */
Calculator.prototype.pressClear=function(event)
{
    this.number1=0;
    this.number2=0;
    this.operator='+';
    $('input').val(this.number2);
};
Calculator.prototype.pressNumber=function(event)
{
    this.number2=this.number2*10+  parseInt($(event.target).text());
    $('input').val(this.number2);
};
Calculator.prototype.pressEqual=function()
{
    switch (this.operator)
    {
        case '+':
            this.doSum();
            break;
        case '-':
            this.doRest();
            break;
        case '*':
            this.doMult();
            break;
        case '/':
            this.doDiv();
            break;

    }


};

/*
*
*/
Calculator.prototype.doSum=function()
{
    this.number1=this.number1 + this.number2;
    $('input').val(this.number1);
    this.operator='+';

};
Calculator.prototype.doRest=function()
{
    this.number1 = this.number1 - this.number2;
    $('input').val(this.number1);
    this.operator = '-';
};
Calculator.prototype.doMult=function()
{
    this.number1 = this.number1 * this.number2;
    $('input').val(this.number1);
    this.operator = '*';
};
Calculator.prototype.doDiv=function()
{
    if(this.number2 != 0)
    {
        this.number1=this.number1 / this.number2;
        $('input').val(this.number1);
        this.operator='/';
    }
    alert('Division by zero error found. Press C key');

};



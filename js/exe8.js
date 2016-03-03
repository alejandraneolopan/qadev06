/**
 * Created by alejandraneolopan on 2/25/2016.
 */
var myDiv=$('<div>Hello</div>');
myDiv.text();
myDiv.text('Hola');

var myTable=$('<table><tr><td>Content</td></tr></table>');

myTable.find('tr');
myTable.find('tr').attr('class','tr-class');
myTable.find('td').attr('class','OtherClass');
myDiv.append(myTable);


var createTableCustom=function(rows,cols)
{
    var myTable=$('<table></table>');
    myTable.find('table').attr('border','1');
    myTable.find('table').attr('align','center');
    var myRows=$('<tr></tr>');
    var myCols='<td>*</td>';

    for (var i=0; i < rows; i++)
    {
        myRows=$('<tr></tr>');
        myCols='<td>*</td>';
        for (var j=1; j < cols; j++)
        {
            myCols=myCols+'<td>*</td>';

        }
        myRows.append($(myCols));
        myTable.append(myRows);
    }
    $('body').append(myTable);
}
createTableCustom(4,4);
var myButton=$('<button></button>');
myButton.text('Hello');
myButton.attr('row',1);
myButton.attr('col',1);
myButton.attr('class','buttonGame');
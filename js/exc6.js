/**
 * Created by alejandraneolopan on 2/15/2016.
 */
var createTable=function(rows, cols)
{
    var table1= document.createElement('table');
    table1.setAttribute('align','center');

        //var newButton = document.createElement('button');
        //newButton.setAttribute('type', 'text');
        var tr = document.createElement('tr');
        tr.innerHTML = new Array(cols+1).join(
            '<td><input type="text" /></td>'
        );
// appends 3 rows to the table by cloning the template row
        for (var i = 0; i < rows; i++) {
            table1.appendChild(tr.cloneNode(true));
        }


    var body1=document.getElementsByTagName("body")[0];

    body1.appendChild(table1);
};
createTable(3,4);


/**
 * Created by alejandraneolopan on 2/15/2016.
 */
var createTable=function(rows, cols)
{
    var table1= document.createElement('table');
    table1.setAttribute('align','center');

        //var newButton = document.createElement('button');
        //newButton.setAttribute('type', 'text');
        var tr,td;

        //tr.innerHTML = new Array(cols+1).join(
          //  '<td><input type="text" /></td>' );

// appends 3 rows to the table by cloning the template row
        for (var i = 0; i < rows; i++) {
            tr = document.createElement('tr');
            for (var j = 0; j < cols; j++) {
                td = document.createElement('td');
                td.innerHTML=' Hola';
                td.addEventListener('mouseover',changeColor);
                td.addEventListener('mouseout',changeColorAqua);
                td.addEventListener('click',changeColorGreen);
                tr.appendChild(td);
            }
            table1.appendChild(tr);

        }


    document.body.appendChild(table1);


};
function changeColor(e)
{e.target.setAttribute('bgcolor','yellow');
}
function changeColorAqua(e)
{e.target.setAttribute('bgcolor','white');
}
function changeColorGreen(e)
{
    e.target.setAttribute('bgcolor','green');
    e.target.removeEventListener('mouseover',changeColor);
    e.target.removeEventListener('mouseout',changeColorAqua);
}
createTable(3,4);


/**
 * Created by alejandraneolopan on 2/3/2016.
 */
//


for (i=0; i<=localStorage.length-1; i++) {
    key = localStorage.key(i);
    val = localStorage.getItem(key);
    console.log(key + " = " + val);
}

//New Game
localStorage.clear();
localStorage['player'] = 'Pepe';
localStorage['points']=0;
localStorage['points']=parseInt(localStorage['points'])+1;
var names = [];//
names[0] = ['A','B','C','D'];//Random
names[1] = ['E','F','G','H'];
names[2] = ['A','B','C','I'];
names[3] = ['L','K','K','J'];
var position1=-1;
var position2=-1;
//Save positions openend
localStorage["names"] = JSON.stringify(names);
var storedNames = JSON.parse(localStorage["names"]);
console.log(storedNames);
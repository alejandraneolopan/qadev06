/**
 * Created by alejandraneolopan on 2/18/2016.
 */
/*jQuery
* */
var subj=$('select[name="subject"]>option:eq(6)');
subj.attr('selected', true);


var firstName=$('input#first-name');
firstName.val('Alejandra');

var lastName=$('#last-name');
lastName.val('Neolopan');

var email=$('input#email');
email.val('Alejandra.neolopan@fundacion-jala.org');

var company=$('#company');
company.val('Jala fundation');
var msg=$('textarea#message');
msg.text('Test QADEV');

var interest=$('select#information-media>option:eq(6)');
interest.attr('selected', true);


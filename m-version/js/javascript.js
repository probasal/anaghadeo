$(document).ready(function(){

$('#promovid').click( function(){

$('#video').get(0).play();       // get(0) gets the original DOM element

$('#promovid').unbind('click');  // remove click listener

});
$(document).ready(function() {

    $("#display").hide();
    $("#temp").hide();
    $("#temp2").hide();
    $("#temp3").hide();

    (function toggleDiv() {
        console.log('hello')
        $("#toggleButton").click(function() {
            $("#display").toggle();
        });
    }());


    $("#toggleTemplate").click(function() {
        console.log(this)
        $("#temp").toggle();
    });

    $("#toggleTemplate2").click(function() {
        console.log(this)
        $("#temp2").toggle();
    });

    $("#toggleTemplate3").click(function() {
        console.log(this)
        $("#temp3").toggle();
    });

});
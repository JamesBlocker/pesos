var convertDinero = function(dollarInput) {
    var dollars = parseInt(dollarInput);
    var pesos = dollars * 17.82;
    return pesos;
};


$(document).ready(function() {
    $('#inputForm').submit(function(event) {
        var userInput = $('#input').val();
        var result = convertDinero(userInput);

        $('#outputP').text(result);
        $('#output').show();
        event.preventDefault();
    });

});

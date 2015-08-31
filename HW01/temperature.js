// temperature.js

var temperature = {
    toFahrenheit: function(Celsius){
        var Fresult = (Celsius * (9/5)) + 32;
        return Fresult;
    },
    
   toCelsius: function(Fahrenheit){
        var Cresult = (Fahrenheit - 32) * (5/9);
        return Cresult;
    }
 };

var TempToday = 82; // Temperature in Fahrenheit
var tempInCelsius = Math.round(temperature.toCelsius(TempToday));

/*
console.log("Celsius to Fahrenheit: " + temperature.toFahrenheit(43));
console.log("Fahrenheit to Celsius: " + temperature.toCelsius(82));
*/

var message = "Today's temperature is " + TempToday + "°F, which is " + tempInCelsius + "°C.";
console.log(message);
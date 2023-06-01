function convertTemperature() {
   
    var temperatureInput = document.getElementById("temperature").value;


    if (temperatureInput) {
   
      var temperatureCelsius = parseFloat(temperatureInput);

      var temperatureFahrenheit = (temperatureCelsius * 9) / 5 + 32;

      var temperatureKelvin = temperatureCelsius + 273.15;

      
      var result = document.getElementById("result");
      result.innerHTML =
        "Temperatura em Celsius: " +
        temperatureCelsius.toFixed(2) +
        "°C<br />" +
        "Temperatura em Fahrenheit: " +
        temperatureFahrenheit.toFixed(2) +
        "°F<br />" +
        "Temperatura em Kelvin: " +
        temperatureKelvin.toFixed(2) +
        "K";

      var body = document.getElementsByTagName("body")[0];

      if (temperatureCelsius > 30) {
        body.style.backgroundColor = '#ED0B0B';
      } else if (temperatureCelsius >= 10 && temperatureCelsius <= 30) {
        body.style.backgroundColor = "#EBE804";
      } else {
        body.style.backgroundColor = "#04CFEB";
      }
    }
  }
let Celsius = document.getElementById("celsius");
console.log(Celsius);

let Fahrenheit = document.getElementById("Fahrenheit");
console.log(Fahrenheit);

let Kelvin = document.getElementById("Kelvin");
console.log(Kelvin);

// function toCelsius(){
//     document.converter.Fahrenheit.value = (document.converter.Celsius.value * 9/5) + 32;
// }
// function toFahrenheit(){
//     document.converter.Celsius.value = (document.converter.Fahrenheit.value - 32) * 5/9;
// }
// function toKelvin(){
//     document.converter.Celsius.value = document.converter.Kelvin.value -273.15;
//     document.converter.Fahrenhei.value = ((document.converter.Kelvin.value -273.15)*9/5)+32;
// }
function roundNumber(number) {
  return number.toFixed(2);
}

Celsius.addEventListener("input", function () {
  let c = parseFloat(Celsius.value);
  let f = c * (9 / 5) + 32;
  let k = c + 273.15;

  Fahrenheit.value = roundNumber(f);
  Kelvin.value = roundNumber(k);
});

Fahrenheit.addEventListener("input", function () {
  let f = parseFloat(Fahrenheit.value);
  let c = (f - 32) * (5 / 9);
  let k = (f - 32) * (5 / 9) + 273.15;

  Celsius.value = roundNumber(c);
  Kelvin.value = roundNumber(k);
});

Kelvin.addEventListener("input", function () {
  let k = parseFloat(Kelvin.value);
  let c = k - 273.15;
  let f = (k - 273.15) * (9 / 5) + 32;

  Fahrenheit.value = roundNumber(f);
  Celsius.value = roundNumber(c);
});

// celsius.oninput = function(){
//     let f = (parsefloat(celsius.value)* 9) / 5 + 32;
//     fahrenheit.value = parseFloat(f.toFixed(2));

//     let k = (parsefloat(celsius.value) + 273.15);
//     kelvin.value = parseFloat(k.toFixed(2));
// }

// fahrenheit.oninput = function(){
//     let c = ((parseFloat(fahrenheit.value) - 32) * 5) / 9;
//     celsius.value = parseFloat(c.toFixed(2));

//     let k = (parseFloat(fahrenheit.value) -32) * 5 / 9 + 273.15;
//     kelvin.value = parseFloat(k.toFixed(2));
// }

// kelvin.oninput -= function(){
//     let f = (parseFloat(kelvin.value) - 273.15) * 9 / 5 + 32;
//     fahrenheit.value = parseFloat(f.toFixed(2));

//     let c = (parseFloat(kelvin.value) - 273.15);
//     celsius.value = parseFloat(c.toFixed(2));
// }

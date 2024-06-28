console.log('Main loaded');

//querySelector om de container op te halen
const container = document.querySelector('.container');
const countryContainer = document.querySelector('.country-container');
const countryFetchContainer = document.querySelector('.country-fetch-container');

//hieronder maak ik 3 landen objecten aan
const countryOne = {
    name: "Nederland",
    population: 18000000
}

const countryTwo = {
    name: "Duitsland",
    population: 83000000
}

const countryThree = {
    name: "Turkije",
    population: 85000000
}

//hieronder zet ik de 3 objecten in een array
const countryArray = [countryOne, countryTwo, countryThree];

console.log(countryArray);
//we roepen de functie aan met de array van landen en de container waar we ze willen tonen
showCountriesOnPage(countryArray, countryContainer);

//deze functie verwacht een array van landen en een container waarin het getoond gaat worden
function showCountriesOnPage(countryArray, htmlContainer){
    //loop over de landen heen
    for (let i = 0; i < countryArray.length; i++) {
        //haal een land uit de array
        const country = countryArray[i];
        //toon de naam van het land en de populatie op de pagina met behulp van innerHTML
        htmlContainer.innerHTML += country.name + ' ' + country.population + '<br>';
    }
}
//we zetten de array om naar een json string
const countryJson = JSON.stringify(countryArray);
//we loggen de json string op het console
console.log(countryJson);
//we zetten de json string terug om naar objecten en tonen het op het console
console.log(JSON.parse(countryJson));

//we fetchen de landen uit country.json
fetch('../json/country.json')
    .then(data => data.json())
    .then(jsonData => showCountries(jsonData));

//deze functie roept een andere functie aan om landen te tonen
function showCountries(countries) {
    console.log(countries);
    //functie om landen te tonen wordt aangeroepen
    showCountriesOnPage(countries, countryFetchContainer);
}

//array met alle landen die deelnemen aan het EK
const countries = ['Nederland', 'Turkije', 'Duitsland',
    'Portugal', 'België', 'Frankrijk', 'Italië', 'Kroatië'];

//we maken een variabele aan om de HTML in te plakken zodat het 1 lange string wordt
let htmlCode = '<ul>';
//we loopen met een for loop over de landen heen
for (let index = 0; index < countries.length; index++) {
    //we halen het eerste land uit de array
    const country = countries[index];
    //we plakken elke land vast aan de HTML 
    htmlCode += '<li>' + country + '</li>';
}
htmlCode += '</ul>';
container.innerHTML = htmlCode;
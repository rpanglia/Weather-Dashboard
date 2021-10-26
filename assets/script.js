
//var APIKey = "&appid=6f64d1940d5a6583e7b42b902d0078a6";
var searchForm = document.querySelector("#search-form");
var inputCity = document.querySelector("#city");
var cityWeatherResult = document.querySelector("#current-city-weather");
var userSelectCity = document.querySelector("#user-selected-city");
var forecastTitle = document.querySelector("#forecast");
var fiveDayContainer = document.querySelector("#five-day-forecast-container");
var oldSearchEntry = document.querySelector("#old-search-entries");

var cities = [];

var formSubmissionEventHandler = function(event){
    event.preventDefault();
    var city = inputCity.value.trim();
 
    if(city){
        getCityForecast(city);
        getFiveDayForecast(city);
        cities.unshift({city});
        inputCity.value = "";
    } else {
        alert("Please enter a city in the search box to look up current weather conditions.");
    }
    saveUserSearch();
    oldSearch(city);
};

 
var oldSearchEventHandler = function(event){
    var city = event.target.getAttribute("data-city")
    if(city){
        getCityForecast(city);
        getFiveDayForecast(city);
    }
};

searchForm.addEventListener("submit", formSubmissionEventHandler);
oldSearchEntry.addEventListener("click", oldSearchEventHandler);
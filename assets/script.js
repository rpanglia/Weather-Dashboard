
//var APIKey = "&appid=6f64d1940d5a6583e7b42b902d0078a6";
var searchForm = document.querySelector("#search-form");
var inputCity = document.querySelector("#city");
var cityWeatherResult = document.querySelector("#current-city-weather");
var userSelectCity = document.querySelector("#user-selected-city");
var forecastTitle = document.querySelector("#forecast");
var fiveDayContainer = document.querySelector("#five-day-forecast-container");
var oldSearchEntry = document.querySelector("#old-search-entries");

var cities = [];
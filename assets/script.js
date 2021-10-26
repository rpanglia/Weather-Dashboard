
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

var saveUserSearch = function(){
    localStorage.setItem("cities", JSON.stringify(cities));
};

var getCityForecast = function(city){
    var apiKey = "6f64d1940d5a6583e7b42b902d0078a6"
    var apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`
 
    fetch(apiURL)
    .then(function(response){
        response.json().then(function(data){
            showWeather(data, city);
        });
    });
};

var showWeather = function(weather, userSearchCity){
 
    cityWeatherResult.textContent= "";  
    userSelectCity.textContent= userSearchCity;
  
    console.log(weather);
  
    //create sections for startdate, icon, temp, humidity, windspeed for user selected city card
    var startDate = document.createElement("span")
    startDate.textContent=" - " + moment(weather.dt.value).format("MMM D, YYYY") + " ";
    userSelectCity.appendChild(startDate);
  
    var temperatureResult = document.createElement("span");
    temperatureResult.textContent = "Current Temperature: " + weather.main.temp + " °F";
    temperatureResult.classList = "list-group-item"
    cityWeatherResult.appendChild(temperatureResult);
  
    var humidityResult = document.createElement("span");
    humidityResult.textContent = "Humidity: " + weather.main.humidity + " %";
    humidityResult.classList = "list-group-item"
    cityWeatherResult.appendChild(humidityResult);
    
    var windResult = document.createElement("span");
    windResult.textContent = "Wind Speed: " + weather.wind.speed + " MPH";
    windResult.classList = "list-group-item"
    cityWeatherResult.appendChild(windResult);
  
    var weatherIcon = document.createElement("img")
    weatherIcon.setAttribute("src", `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`);
    userSelectCity.appendChild(weatherIcon);
  
    //coordinate variables
    var lat = weather.coord.lat;
    var lon = weather.coord.lon;
    getUVIndex(lat,lon)
};
 

var getUVIndex = function(lat,lon){
    var apiKey = "6f64d1940d5a6583e7b42b902d0078a6"
    var apiURL = `https://api.openweathermap.org/data/2.5/uvi?appid=${apiKey}&lat=${lat}&lon=${lon}`
   
    fetch(apiURL)
    .then(function(response){
        response.json().then(function(data){
            showUVIndex(data)
            console.log(data)
        });
    });
 
    console.log(lat);
    console.log(lon);
};

var showUVIndex = function(index){
    var UVIndexResult = document.createElement("div");
    UVIndexResult.textContent = "UV Index: "
    UVIndexResult.classList = "list-group-item"
 
    UVIndexValue = document.createElement("span")
    UVIndexValue.textContent = index.value
 
    if(index.value <=2){
        UVIndexValue.classList = "favorable"
    }
    else if(index.value >2 && index.value<=7){
        UVIndexValue.classList = "moderate "
    }
    else if(index.value >7){
        UVIndexValue.classList = "severe"
    };
 
    UVIndexResult.appendChild(UVIndexValue);
    cityWeatherResult.appendChild(UVIndexResult);
};

var getFiveDayForecast = function(city){
    var apiKey = "6f64d1940d5a6583e7b42b902d0078a6"
    var apiURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${apiKey}`
 
    fetch(apiURL)
    .then(function(response){
        response.json().then(function(data){
           showFiveDay(data);
        });
    });
};

var showFiveDay = function(weather){
    fiveDayContainer.textContent = "";
    forecastTitle.textContent = "5-Day Forecast:";
 
    var forecast = weather.list;
        for(var i=5; i < forecast.length; i=i+8){
        var dailyWeatherForecast = forecast[i];
       
        var forecastResult = document.createElement("div");
        forecastResult.classList = "card text-light bg-primary m-2";
 
        console.log(dailyWeatherForecast)
        fiveDayContainer.appendChild(forecastResult);
 
        //for 5 day forecast: again create sections for date, icon, temp, humdity
        var fiveDayDates = document.createElement("h5")
        fiveDayDates.textContent = moment.unix(dailyWeatherForecast.dt).format("MMM D, YYYY");
        fiveDayDates.classList = "text-center card-header"
        forecastResult.appendChild(fiveDayDates);
       
        var weatherIcon = document.createElement("img")
        weatherIcon.classList = "card-body text-center";
        weatherIcon.setAttribute("src", `https://openweathermap.org/img/wn/${dailyWeatherForecast.weather[0].icon}@2x.png`);  
        forecastResult.appendChild(weatherIcon);
        
        var fiveDayTemp = document.createElement("span");
        fiveDayTemp.classList = "card-body text-center";
        fiveDayTemp.textContent = dailyWeatherForecast.main.temp + " °F";
        forecastResult.appendChild(fiveDayTemp);
    
        var fiveDayHumid = document.createElement("span");
        fiveDayHumid.classList = "card-body text-center";
        fiveDayHumid.textContent = dailyWeatherForecast.main.humidity + "  %";
        forecastResult.appendChild(fiveDayHumid);

        var fiveDayWind = document.createElement("span");
        fiveDayWind.classList = "card-body text-center";
        fiveDayWind.textContent = dailyWeatherForecast.wind.speed + " MPH";
        forecastResult.appendChild(fiveDayWind);
    
        console.log(forecastResult);
    };
 
};


var oldSearch = function(oldSearch){
 
    console.log(oldSearch)
 
    oldSearchText = document.createElement("button");
    oldSearchText.textContent = oldSearch;
    oldSearchText.classList = "border btn-primary p-2 d-flex w-100";
    oldSearchText.setAttribute("data-city", oldSearch)
    oldSearchText.setAttribute("type", "submit");
 
    oldSearchEntry.prepend(oldSearchText);
};


var oldSearchEventHandler = function(event){
    var city = event.target.getAttribute("data-city")

    if(city){
        getCityForecast(city);
        getFiveDayForecast(city);
    }
};

// oldSearch();

searchForm.addEventListener("submit", formSubmissionEventHandler);
oldSearchEntry.addEventListener("click", oldSearchEventHandler);
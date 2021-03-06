# Weather Dashboard

This *Weather Dashboard* allows users to search for current and future weather conditions in a city of their choosing! This application retrieves weather data for cities around the world using a third-party API, "OpenWeather One Call API" and runs within the browser while featuring dynamically updated HTML and CSS.  

## Description
When this application is loaded, user arrives to the WEATHER DASHBOARD landing page. The user is able to input a city name into the search box located on the left, and click on the search (magnifying glass) button. The application stores this search entry in a blue box located beneath the search box on the left. On the right side of the page, the city name, today's date and current weather conditions (temperature, humidity, wind speed and UV index). In addition to this, a five day weather forecast for the respective city is also produced. User can search for a new city in each entry and the data will reflect the current and projected weather conditions for the selected city. These new search entries are added to the top of a growing list underneath the search box. Users are also able to click on previous search entries to load the weather conditions for previously searched cities. If a user would like to clear the page, they can simply hit refresh button located to the left of the URL box.

## User Story
AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly

## Acceptance Criteria
GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
WHEN I view the UV index
THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city

## Previews
Please see below images of the completed Weather Dashboard application. 
![starter-image](https://user-images.githubusercontent.com/88461011/138934058-ea9acb07-95f2-425c-9adf-1ffb55704528.jpg)
The first image displays what the user sees when arriving on this page. User is able to input a city name in the search box on the left side of the page.

![first-search-entry](https://user-images.githubusercontent.com/88461011/138934082-9ecc484a-f80b-4b81-9f9d-74eabdca419a.jpg)
This second image displays weather content for New York (user input). This showcases the city name, current date, current weather conidition for current date as well as a five-day forecast for the same city!

![multiple-searches](https://user-images.githubusercontent.com/88461011/138934090-babfb23d-c872-4e28-8035-70b4b6fb0118.jpg)
Users can search for multiple cities (one at a time) and their previous search entries are stored on the left (via localStorage) and users can click on any of the previous entries to reload the weather data.

## Links
Link to Weather Dashboard Deployed application: https://rpanglia.github.io/Weather-Dashboard/

## That's all for now folks!

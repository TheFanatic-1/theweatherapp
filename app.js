const apiKey = "b37074c8ac8e771c76ab3d71c01f95c1";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
let searchBox = document.querySelector(".search input");
let searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")
async function checkWeather(city) {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        var data = await response.json();

        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        let faren = document.querySelector(".temp");
        faren.innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

        document.querySelector(".feel").innerHTML = `Feels like ${data.main.feels_like}`;
        if (data.weather[0].main == "Clouds") {
                weatherIcon.src = "images/clouds.png";

        } else if (data.weather[0].main == "Clear") {
                weatherIcon.src = "images/clear.png";
                background.style.backgroundImage = url("sunnyday.jpg");
        } else if (data.weather[0].main == "Wind") {
                weatherIcon.src = "images/wind.png";

        } else if (data.weather[0].main == "snow") {
                weatherIcon.src = "images/snow.png";

        } else if (data.weather[0].main == "rain") {
                weatherIcon.src = "images/rain.png";

        } else if (data.weather[0].main == "mist") {
                weatherIcon.src = "images/mist.png";

        }
        faren.addEventListener("click", () => {
                let fharenhight = 9 / 5 * (data.main.temp) + 32;
                faren.innerHTML = Math.round(fharenhight) + "°F";
        })

        document.querySelector(".weather").style.display = "block";
}
searchBtn.addEventListener("click", () => {
        checkWeather(searchBox.value);


})
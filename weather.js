let weather = {
    apiKey: "ac8ed937a63ecaf67bfd0c3ba68a1fcf",
    fetchweather: function(city) {
        fetch(
                "http://api.openweathermap.org/data/2.5/weather?q=" +
                city +
                "&units=metric&appid=" +
                this.apiKey
            )
            .then((response) => response.json())
            .then((data) => this.displayweather(data));

    },
    displayweather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        const { feels_like } = data.main;
        document.querySelector('.city').innerHTML = "weather in " + name;
        document.querySelector('.temp').innerHTML = temp + "°C";
        document.querySelector('.icon').src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector('.description').innerHTML = description;
        document.querySelector('.humidity').innerHTML = "Humidity: " + humidity + "%";
        document.getElementById('feel').innerText = "Feels like " + feels_like + "°C";
        document.querySelector('.wind').innerHTML = "wind speed: " + speed + "km/h";
        document.querySelector('.weather').classList.remove('loading');
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + ")";

    },
    search: function() {
        this.fetchweather(document.querySelector(".search-bar").value);
        document.querySelector('.search-bar').value = '';
    }
};
document.querySelector(".search button").addEventListener("click", function() {
    weather.search();
});
var x = document.getElementsByClassName('search-bar');
x[0].addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        document.getElementById('search').click();
    }
});
if (document.querySelector('.search-bar').value === '') {
    body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?landscape')";
}
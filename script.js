let weather ={
  "apiKey" : "8391ccdd646851f40c4971b9f0aa4935",
  fetchWeather: function (city) {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&appid='+ this.apiKey)
    .then((response)=>response.json()).then((data)=>this.displayWeather(data))
  },
  displayWeather: function (data){
    const{name} = data;
    const{icon, description} = data.weather[0];
    const{temp, humidity} = data.main;
    const{speed} = data.wind;
    console.log(icon, description, temp, humidity, speed);
    document.querySelector('.city').innerText = `${name}`;
    document.querySelector('.icon').src = "http://openweathermap.org/img/w/" + icon + ".png";
    document.querySelector('.description').innerText = description;
    document.querySelector('.humidity').innerText = `Humidity: ${humidity}%`;
    document.querySelector('.wind').innerText = `Wind speed: ${speed}Km/h`
    document.querySelector('.temp').innerText = `${temp}ºC`;
  }
}

const findCityWeather = function(){
  const enteredCity = document.querySelector('.search-bar').value;
  weather.fetchWeather(enteredCity);
  document.querySelector('.search-bar').value = '';
   }

document.querySelector('.search-icon').addEventListener('click', findCityWeather);
document.querySelector('.search-bar').addEventListener('keydown', function(e) {
  if(e.key ==='Enter'){
    findCityWeather();
  }
});

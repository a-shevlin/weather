//business logic
export default class WeatherService {
  static getWeather(location) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.API_KEY}`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
        reject(request.response);
        }
      }
      request.open("GET", url, true);
      request.send;
    });
  }
}
const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const press=document.getElementById('press');
const feels=document.getElementById('feels');
const wind_speed = document.getElementById('wind-speed');
const visibility = document.getElementById('vis');
const video1=document.getElementById('myVideo');

const location_not_found = document.querySelector('.location-not-found');

const weather_body = document.querySelector('.weather-body');


async function checkWeather(city){
    const api_key = "d846bd6993cfdeb74c27ae501b552d49";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(response => response.json());


    if(weather_data.cod === `404`){
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        console.log("error");
        return;
    }

    console.log("run");
    location_not_found.style.display = "none";
    weather_body.style.display = "flex";
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;

    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;
    visibility.innerHTML=`${weather_data.visibility}mi`;
    feels.innerHTML=`${Math.round(weather_data.main.feels_like-273.15)}°C`;
    press.innerHTML=`${weather_data.main.pressure}mi`;

    let currDate,hoursMin;
// const bg=document.getElementsByTagName(body);
    switch(weather_data.weather[0].main){
        case 'Haze':
            document.getElementById('intro').style.display="none";
            weather_img.src = "assets/cloud.png";
            document.getElementById('slidebg').style.backgroundImage= "url('assets/haze1.jpg')";
            video1.style.display="none";
        
            //time
            currDate = new Date();
            hoursMin = currDate.getHours() + ':' + currDate.getMinutes();
            document.getElementById('ct').innerHTML = hoursMin;


            //day
            function formatDate(date) {
                const DAYS = [
                  "Sunday",
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday"
                ];
                const MONTHS = [
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                  "August",
                  "September",
                  "October",
                  "November",
                  "December"
                ];
              
                return `${DAYS[date.getDay()]}, ${
                  MONTHS[date.getMonth()]
                } ${date.getDate()} ${date.getFullYear()}`;
              }
              
              setInterval(() => {
                const now = new Date();
              
                document.getElementById('date').textContent = formatDate(now);
              }, 200);
              


            break;
        
        case 'Clouds':
            document.getElementById('intro').style.display="none";
            weather_img.src = "assets/cloud.png";
            document.getElementById('slidebg').style.backgroundImage= "url('assets/cloudy1.jpg')";
            video1.style.display="none";            
            
                        //time
                        currDate = new Date();
                        hoursMin = currDate.getHours() + ':' + currDate.getMinutes();
                        document.getElementById('ct').innerHTML = hoursMin;
            
            
                        //day
                        function formatDate(date) {
                            const DAYS = [
                              "Sunday",
                              "Monday",
                              "Tuesday",
                              "Wednesday",
                              "Thursday",
                              "Friday",
                              "Saturday"
                            ];
                            const MONTHS = [
                              "January",
                              "February",
                              "March",
                              "April",
                              "May",
                              "June",
                              "July",
                              "August",
                              "September",
                              "October",
                              "November",
                              "December"
                            ];
                          
                            return `${DAYS[date.getDay()]}, ${
                              MONTHS[date.getMonth()]
                            } ${date.getDate()} ${date.getFullYear()}`;
                          }
                          
                          setInterval(() => {
                            const now = new Date();
                          
                            document.getElementById('date').textContent = formatDate(now);
                          }, 200);
                          
            break;
        case 'Clear':
            document.getElementById('intro').style.display="none";
            weather_img.src = "assets/clear.png";
            document.getElementById('slidebg').style.backgroundImage= "url('assets/sunny1.jpg')";
            video1.style.display="none";
             
                        //time
                        currDate = new Date();
                        hoursMin = currDate.getHours() + ':' + currDate.getMinutes();
                        document.getElementById('ct').innerHTML = hoursMin;
            
            
                        //day
                        function formatDate(date) {
                            const DAYS = [
                              "Sunday",
                              "Monday",
                              "Tuesday",
                              "Wednesday",
                              "Thursday",
                              "Friday",
                              "Saturday"
                            ];
                            const MONTHS = [
                              "January",
                              "February",
                              "March",
                              "April",
                              "May",
                              "June",
                              "July",
                              "August",
                              "September",
                              "October",
                              "November",
                              "December"
                            ];
                          
                            return `${DAYS[date.getDay()]}, ${
                              MONTHS[date.getMonth()]
                            } ${date.getDate()} ${date.getFullYear()}`;
                          }
                          
                          setInterval(() => {
                            const now = new Date();
                          
                            document.getElementById('date').textContent = formatDate(now);
                          }, 200);
                          
            break;
        case 'Rain':
            document.getElementById('intro').style.display="none";
            weather_img.src = "assets/rain.png";
            document.getElementById('slidebg').style.backgroundImage= "url('assets/rainy1.jpg')";
            video1.style.display="none";

                        //time
                        currDate = new Date();
                        hoursMin = currDate.getHours() + ':' + currDate.getMinutes();
                        document.getElementById('ct').innerHTML = hoursMin;
            
            
                        //day
                        function formatDate(date) {
                            const DAYS = [
                              "Sunday",
                              "Monday",
                              "Tuesday",
                              "Wednesday",
                              "Thursday",
                              "Friday",
                              "Saturday"
                            ];
                            const MONTHS = [
                              "January",
                              "February",
                              "March",
                              "April",
                              "May",
                              "June",
                              "July",
                              "August",
                              "September",
                              "October",
                              "November",
                              "December"
                            ];
                          
                            return `${DAYS[date.getDay()]}, ${
                              MONTHS[date.getMonth()]
                            } ${date.getDate()} ${date.getFullYear()}`;
                          }
                          
                          setInterval(() => {
                            const now = new Date();
                          
                            document.getElementById('date').textContent = formatDate(now);
                          }, 200);
                          
            break;
        case 'Mist':
            document.getElementById('intro').style.display="none";
            weather_img.src = "assets/mist.png";
            document.getElementById('slidebg').style.backgroundImage= "url('assets/mist1.jpg')";
            video1.style.display="none";

                        //time
                        currDate = new Date();
                        hoursMin = currDate.getHours() + ':' + currDate.getMinutes();
                        document.getElementById('ct').innerHTML = hoursMin;
            
            
                        //day
                        function formatDate(date) {
                            const DAYS = [
                              "Sunday",
                              "Monday",
                              "Tuesday",
                              "Wednesday",
                              "Thursday",
                              "Friday",
                              "Saturday"
                            ];
                            const MONTHS = [
                              "January",
                              "February",
                              "March",
                              "April",
                              "May",
                              "June",
                              "July",
                              "August",
                              "September",
                              "October",
                              "November",
                              "December"
                            ];
                          
                            return `${DAYS[date.getDay()]}, ${
                              MONTHS[date.getMonth()]
                            } ${date.getDate()} ${date.getFullYear()}`;
                          }
                          
                          setInterval(() => {
                            const now = new Date();
                          
                            document.getElementById('date').textContent = formatDate(now);
                          }, 200);
                          
            break;
        case 'Snow':
            document.getElementById('intro').style.display="none";
            weather_img.src = "assets/snow.png";
            document.getElementById('slidebg').style.backgroundImage= "url('assets/snow1.jpg')";
            video1.style.display="none";

                        //time
                        currDate = new Date();
                        hoursMin = currDate.getHours() + ':' + currDate.getMinutes();
                        document.getElementById('ct').innerHTML = hoursMin;
            
            
                        //day
                        function formatDate(date) {
                            const DAYS = [
                              "Sunday",
                              "Monday",
                              "Tuesday",
                              "Wednesday",
                              "Thursday",
                              "Friday",
                              "Saturday"
                            ];
                            const MONTHS = [
                              "January",
                              "February",
                              "March",
                              "April",
                              "May",
                              "June",
                              "July",
                              "August",
                              "September",
                              "October",
                              "November",
                              "December"
                            ];
                          
                            return `${DAYS[date.getDay()]}, ${
                              MONTHS[date.getMonth()]
                            } ${date.getDate()} ${date.getFullYear()}`;
                          }
                          
                          setInterval(() => {
                            const now = new Date();
                          
                            document.getElementById('date').textContent = formatDate(now);
                          }, 200);
                          
            break;

        case 'Thunderstorm':
            document.getElementById('intro').style.display="none";
            weather_img.src="assets/thunder.png";
            document.getElementById('slidebg').style.backgroundImage= "url('assets/thunder1.jpg')";
            video1.style.display="none";
                        //time
                        currDate = new Date();
                        hoursMin = currDate.getHours() + ':' + currDate.getMinutes();
                        document.getElementById('ct').innerHTML = hoursMin;
            
            
                        //day
                        function formatDate(date) {
                            const DAYS = [
                              "Sunday",
                              "Monday",
                              "Tuesday",
                              "Wednesday",
                              "Thursday",
                              "Friday",
                              "Saturday"
                            ];
                            const MONTHS = [
                              "January",
                              "February",
                              "March",
                              "April",
                              "May",
                              "June",
                              "July",
                              "August",
                              "September",
                              "October",
                              "November",
                              "December"
                            ];
                          
                            return `${DAYS[date.getDay()]}, ${
                              MONTHS[date.getMonth()]
                            } ${date.getDate()} ${date.getFullYear()}`;
                          }
                          
                          setInterval(() => {
                            const now = new Date();
                          
                            document.getElementById('date').textContent = formatDate(now);
                          }, 200);
                          
            break;    

    }

    console.log(weather_data);
}


searchBtn.addEventListener('click', ()=>{
    checkWeather(inputBox.value);
});

// function myfunc() {
//     var x = document.getElementById("myText").value;
//     if(x=='overcast'){
//         back
//     };
// }

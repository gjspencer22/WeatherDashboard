// function getWeather() {
//     var citySearch = document.querySelector('#findCity').value;

//     var button = document.querySelector("#button")

//     button.addEventListener('click',function(){
//         fetch(
            
//             'api.openweathermap.org/data/2.5/weather?q=' + 
//             findCity.value + 
//             '&appid=7938b2c7d262537079eede933a87d70c' 
            
//         )
//         .then(response => response.json())
//         .then(data => console.log(data))
    
//         .catch (err => alert("City Not Found"))

//     }

//     .then(function(response) {
//         return response.json();

//     })
//     .then(function(response) {
//         console.log(response.data[0]);

//         var weatherEl = document.querySelector('#forecastBox');

//         weatherEl.innerHTML = '';

//         var weatherInfo = document.createElement('img');
//         weatherInfo.setAttribute.apply('src', response.data[0].images.fixed_height.url);

//         weatherEl.appendChild(weatherInfo);
//     }));




// }


function moscow() {
    var city1 = document.querySelector('city1');
    fetch('https://api.openweathermap.org/data/2.5/weather?id=524901&appid=7938b2c7d262537079eede933a87d70c')
    .then(response => response.json())
    .then(data => console.log(data))
}

function london() {
    var city2 = document.querySelector('city2');
    fetch('https://api.openweathermap.org/data/2.5/weather?q=London&appid=7938b2c7d262537079eede933a87d70c')
    .then(response => response.json())
    .then(data => console.log(data))
}


function seattle() {
    var city3 = document.querySelector('city3');
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Seattle&appid=7938b2c7d262537079eede933a87d70c')
    .then(response => response.json())
    .then(data => console.log(data))
}

function sydney() {
    var city4 = document.querySelector('city4');
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Sydney&appid=7938b2c7d262537079eede933a87d70c')
    .then(response => response.json())
    .then(data => console.log(data))
}

function beijing() {
    var city5 = document.querySelector('city5');
    fetch('https://api.openweathermap.org/data/2.5/weather?q=beijing&appid=7938b2c7d262537079eede933a87d70c')
    .then(response => response.json())
    .then(data => console.log(data))
}

function dubai() {
    var city6 = document.querySelector('city6');
    fetch('https://api.openweathermap.org/data/2.5/weather?q=dubai&appid=7938b2c7d262537079eede933a87d70c')
    .then(response => response.json())
    .then(data => console.log(data))
}
function slc() {
    var city7 = document.querySelector('city7');
    fetch('https://api.openweathermap.org/data/2.5/weather?q=salt%20lake&appid=7938b2c7d262537079eede933a87d70c')
    .then(response => response.json())
    .then(data => displayCity(data))
}

// fucntion find() {
//     fetch('api.openweathermap.org/data/2.5/weather?q=' + 
//     findCity.value + 
//     '&appid=7938b2c7d262537079eede933a87d70c')
//    }

   function find() {
       var findCity = document.getElementById('findCity');
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + 
    findCity.value + 
    '&appid=7938b2c7d262537079eede933a87d70c')
    .then(response => response.json())
    .then(data => console.log(data))

   }

   function displayCity(data) {
    var displayCity = document.getElementById('currentCity');
    console.log(data);
    
    var temp = data.main.temp -273.15 
    var name = data.name
    var weather = data.weather[0].description
    var country = data.sys.country 
    displayCity.innerText = name
    displayCity.innerText = temp
    displayCity.innerText = weather
    displayCity.innerText = country
    
    
   }

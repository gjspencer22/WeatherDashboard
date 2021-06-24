
var cityListEl = document.querySelector('.cityList');
var displayCity = document.getElementById('infoCard');


cityListEl.addEventListener('click', cityButtonClick)

function find() {
    var findCity = document.getElementById('findCity');
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' +
        findCity.value + 
        '&appid=7938b2c7d262537079eede933a87d70c')
        .then(response => response.json())
        .then(data => showCity(data))
        .catch(function (error) {
            alert('Unable to find city.')
            
        })
 
}

function cityButtonClick(event) {
    
    if (event.target.localName === 'button') {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=' +
            event.target.textContent +
            '&appid=7938b2c7d262537079eede933a87d70c')
            .then(response => response.json())
            .then(data => showCity(data))
            // .catch(function (error) {
            //     alert
            // })
            // console.log(cityButtonClick);
           
    }

}
// function createButton(data) {
//     // console.log(data.name)
//     var newButton = document.createElement('button');
//     newButton.innerText = data.name
//     cityListEl.append(newButton)
//     displayCity.innerHTML = currentCity(data.name, data.main.temp)
// }

function showCity(data) {
    var name = data.name
    var temp = ((((data.main.temp -273.15 ) *9) /5)+32).toFixed(2)
    var weather = data.weather[0].description
    var country = data.sys.country
    displayCity.innerHTML = currentCity(name, temp, weather,country);
}
function currentCity(name, temp, weather,country) {
    var template = `<div><p>${name}</p><p>${temp}&deg; F</p><p>The skies are ${weather}</p><p>${country}</p></div>`
    return template;
}


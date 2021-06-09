
var cityListEl = document.querySelector('.cityList');
var displayCity = document.getElementById('infoCard');


cityListEl.addEventListener('click', cityButtonClick)

function find() {
    var findCity = document.getElementById('findCity');
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' +
        findCity.value + 
        '&appid=7938b2c7d262537079eede933a87d70c')
        .then(response => response.json())
        .then(data => createButton(data))
        // .catch(function (error) {
        //     alert
            
        // })
 
}
function cityButtonClick(event) {
    
    if (event.target.localName === 'button') {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=' +
            event.target.textContent +
            '&appid=7938b2c7d262537079eede933a87d70c')
            .then(response => response.json())
            .then(data => currentCity(data.name))
            console.log(currentCity)
            // var newDisp = currentCity(data.name)
            // displayCity.innerHTMl = newDisp
            // .catch(function (error) {
            //     alert
            // })
            // console.log(cityButtonClick);
           
    }

}
function createButton(data) {
    // console.log(data.name)
    var newButton = document.createElement('button');
    newButton.innerText = data.name
    cityListEl.append(newButton)
    displayCity.innerHTML = currentCity(data.name, data.main.temp)
}

function displayCity(data) {

    console.log(data);
    // var displayCity = document.getElementById('currentCityCountry');
    


    var temp = data.main.temp - 273.15
    var name = data.name
    var weather = data.weather[0].description
    var country = data.sys.country
    displayCity.innerHTML = currentCity(name, temp);
    //     displayCity.innerText = temp
    //     displayCity.innerText = weather
    //     displayCity.innerText = country
}
function currentCity(name, temp) {
    var template = `<div><p>${name}</p><p>${temp}</p></div>`
    return template;
}




var getFeaturedRepos = function(language) {
    var apiUrl = "https://api.github.com/search/repositories?q=" + language + "+is:featured&sort=help-wanted-issues";
  
    fetch(apiUrl);
  };
var url = 'https://restcountries.com/v3.1/all'
var weather_api = 'f1b1d2ea24690b0205078b422cd3c853'
async function reqFetch(){
    var url_Fetch = await fetch(url)
    var res = await url_Fetch.json()
    // console.log(res)

    for(var i=0; i<res.length; i++){
        // console.log(res[i].name.common)
        var card = document.createElement('p')
        card.innerHTML = `
        <div class ='col'>
        <div class="card h-100">
        <div class="card-body">
        <h3 class="card-title">${res[i].name.common}</h3>
        <img src="${res[i].flags.png}" class="card-img-top" alt="...">
        <p class="card-text card-capital">Capital : ${res[i].capital}</p>
        <p class="card-text card-region">Region : ${res[i].region}</p>
        <p class="card-text card-cca">Country Code : ${res[i].cca3}</p>
        <button onclick='weatherFunction(this)' class="btn btn-primary">Click for Weather</button>
        <div class ="weatherData">
        <p>weather: </p>
        </div>
        </div>
      </div>
      </div>`
      var parent = document.querySelector('.card-group')
        parent.append(card)
var allButton = document.querySelectorAll('button');
    allButton.forEach((button,i)=>{
        button.onclick = function (){
        country_lat = (res[i].latlng[0])
        country_lon = (res[i].latlng[1])
        console.log(country_lon)
        weatherFetch();
    //--------------------- weather api --------------- 
    var weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${country_lat}&lon=${country_lon}&appid=${weather_api}`
    async function weatherFetch (){
        var weather_data= await fetch (weatherUrl)
        var weather = await weather_data.json()
        console.log(weather)
        
    }

}
    })
    }

}
reqFetch();



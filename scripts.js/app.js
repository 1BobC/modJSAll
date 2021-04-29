// Section 13: #99 Project Preview & Setup Project - Weather App
//#100 HTML & CSS Template   -   see forecast.js
//#101 AccuWeather API   -   see forecast.js
//#102 Get City API Call   -   see forecast.js 
//#103 Get Weather API Call   -   see forecast.js

//#104 Updating the Location
const cityForm= document.querySelector('form');
const card= document.querySelector('.card');        //#106 Updating the UI see html
const details= document.querySelector('.details');  //#106 Updating the UI see html
const updateUI= data => {
    const cityDets= data.cityDets;
    const weather= data.weather;
    //#106 Updating the UI, see html and how amended below
    details.innerHTML = `
    <h5 class="my-3">${cityDets.EnglishName}</h5>
        <div class="my-3">${weather.WeatherText}</div>
        <div class="display-4 my-4">
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>
    `;
    //remove the d-none class (in card on html) uf present
    if(card.classList.contains('d-none')){
        card.classList.remove('d-none');
    }
};


const updateCity= async (city) => {
    //console.log(city);
    const cityDets= await getCity(city);
    const weather= await getWeather(cityDets.Key);
    return {
        cityDets,             //remove :cityDets #105 Object Shorthand Notation
        weather              //remove weather:  #105 Object Shorthand Notation
    };
} ;

cityForm.addEventListener('submit', e => {
    //prevent default action
    e.preventDefault();
    //get city value
    const city= cityForm.city.value.trim();
    cityForm.reset();
    //update the ui with the new city - see const update city above
    updateCity(city)
    .then(data => updateUI(data))
    .catch(err => console.log(err));

});

//#105 Object Shorthand Notation
//#106 Updating the UI
//#107 Destructuring


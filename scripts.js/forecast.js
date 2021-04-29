// Section 13: #99 Project Preview & Setup Project - Weather App
//#100 HTML & CSS Template

//#101 AccuWeather API
const key= '3RHb2BhshzIWidBzVVB255b7zWi0QpAI';

//#102 Get City API Call       
//get weather information
    const getWeather= async (id) => {
            const base= "http://dataservice.accuweather.com/currentconditions/v1/";
            const query= `${id}?apikey=${key}`;

            const response = await fetch(base + query);
            const data= await response.json();

            //console.log(data);
            return data[0];
    };

//#103 Get Weather API Call
    const getCity= async (city) => {

        const base= "http://dataservice.accuweather.com/locations/v1/cities/search";

        const query= `?apikey=${key}&q=${city}`;

        const response = await fetch(base + query);

        const data= await response.json();

        // console.log(data[0]);
        return data[0];
    };
//code test only see app.js for hook up to form
// getCity('gravesend').then(data => {
// return getWeather(data.Key);
// }).then(data => {
//     console.log(data);
// }).catch(err => console.log(err));

//#104 Updating the Location see app.js
//#105 Object Shorthand Notation
//#106 Updating the UI
//#107 Destructuring
        

   

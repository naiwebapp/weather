
const storage = new Storage();

const weatherLocation = storage.getLocationData();
//init weather class
const weather = new Weather(weatherLocation.city, weatherLocation.state);

//const weather = new Weather('Miami', 'FL');

const ui = new UI();


//Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather());

//Change Location event
document.getElementById('w-change-btn').addEventListener('click',(e) => {
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;

    //change location
    weather.changeLocation(city,state);

    //set location in location storage
    storage.setLocationData(city, state);

    //get and display weather
    getWeather();

    //close modal
    $('#locModal').modal('hide');

})



function getWeather(){
  weather.getWeather()
    .then(results => {
      console.log(results.responseData.current_observation);
      console.log(results.response10days.forecast);
        //call UI to paint the UI
       // console.log(results[0].conditions)
       ui.paint(results.responseData.current_observation, results.response10days.forecast);
     // console.log(results);
    })
    .catch(err => {
      ui.error()
    });

}
class Weather{
  constructor(city,state){
    this.apiKey = '99dfe35fcb7de1ee';
    this.city = city;
    this.state = state;
  }

//Fetch weather from API
async getWeather(){
  //get weather for one day
  const response = await fetch(`http://api.wunderground.com/api/${this.apiKey}/conditions/q/${this.state}/${this.city}.json`);

  //get weather for 10 days
  const response10 = await fetch(`http://api.wunderground.com/api/${this.apiKey}/forecast10day/q/${this.state}/${this.city}.json`);

  const responseData = await response.json();
  const response10days = await response10.json();

 // return responseData.current_observation;
 return {
      responseData,
      response10days
 } 
}

//change weather location
changeLocation(city,state){
  this.city = city;
  this.state = state;
}

}   
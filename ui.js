class UI{
  constructor(){
    this.location = document.getElementById("w-location");
    this.desc = document.getElementById("w-desc");
    this.string = document.getElementById("w-string");
    this.details = document.getElementById("w-details");
    this.icon = document.getElementById("w-icon");
    this.humidity = document.getElementById("w-humidity");
    this.feelslike = document.getElementById("w-feels-like");
    this.dewpoint = document.getElementById("w-dewpoint");
    this.wind = document.getElementById("w-wind");
    this.container = document.getElementById("top");
    this.errormsg = document.getElementById("errormsg")

    this.thead = document.getElementById('w-thead');
    this.tbody = document.getElementById('w-tbody');
   
  };

  paint(condition, weather) {
    //unhide display 
    this.container.hidden = false;
    //clear errormsg
    this.errormsg.textContent = '';

    //grab 10 days forecast
    // weather.simpleforecast.forecastday.forEach(i => {
    //   console.log(i.high)
    // });
    let index, index_tf, thead='', tbody='';
    const sf = weather.simpleforecast.forecastday;
    const tf = weather.txt_forecast.forecastday;

    //today's weather
    this.location.textContent = condition.display_location.full
    this.desc.textContent = sf[0].conditions;
    this.string.textContent = `${sf[0].high.fahrenheit} °F (${sf[0].high.celsius} °C)`;
    this.icon.setAttribute('src', sf[0].icon_url);

    //next 9 days
    thead = '<tr>';
    tbody = '<tr class="table-primary">';
    for (index = 1, index_tf = 2; index < sf.length; ++index, index_tf += 2) {
      thead += `<th>${sf[index].date.monthname_short} ${sf[index].date.yday}
               (${sf[index].date.weekday_short})</th>`;
      tbody += `<td title="${tf[index_tf].fcttext}">
                <img id="w-icon" src="${sf[index].icon_url}">
                <br>H: ${sf[index].high.fahrenheit} °F (${sf[index].high.celsius} °C)  
                <br>L: ${sf[index].low.fahrenheit} °F (${sf[index].low.celsius} °C)
                </td>`;
      // output += `<td><b>${sf[index].date.monthname_short} ${sf[index].date.yday}
      //         (${sf[index].date.weekday_short}) :</b> ${tf[index_tf].fcttext}
      //         <br><img id="w-icon" 
      //         src="${sf[index].icon_url}">
      //         <br>H: ${sf[index].high.fahrenheit} °F (${sf[index].high.celsius} °C)  
      //         <br>L: ${sf[index].low.fahrenheit} °F (${sf[index].low.celsius} °C)
      //         </td>`
  }
  thead += '</tr>';
  tbody += '</tr>';
  
  this.thead.innerHTML = thead;
  this.tbody.innerHTML = tbody;

    // this.humidity.textContent = `Relative Humidity: ${weather.relative_humidity}`;
    // this.feelslike.textContent = `Feels Like: ${weather.feelslike_string}`;
    // this.dewpoint.textContent = `Dew Point: ${weather.dewpoint_string}`;
    // this.wind.textContent = `Wind: ${weather.wind_string}`;
  }

  error() {
    this.errormsg.textContent = "Please choose another location.";
    this.container.hidden = true;
  //   this.string.textContent = "Error in displaying weather. Please choose another location."
  //   this.location.textContent = '';
  //   this.desc.textContent = '';
  //   this.icon = '';
  //   this.details.hidden = true;
  // 
}
}
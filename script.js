
document.getElementById("woo").addEventListener("click", function(event) {
  event.preventDefault();
  const type = document.getElementById("type").value;
  if (type === "")
    return;
  console.log(type);
  const number = document.getElementById("number").value;
  if (number === "")
    return;
  console.log(number);

  const url = "https://swapi.dev/api/" + type + "/" + number + "/" ;
   fetch(url)
     .then(function(response) {
       return response.json();
     }).then(function(json) {
       let results = "";

      if (type === 'films'){
        if (number < 1 || number > 6) {
          results += '<h1>PLEASE ENTER VALID OPTION</h1>';
          document.getElementById("fetchResults").innerHTML = results;
          return;
        }
        results += '<hr><h2>You have chosen: ' + json.title + " </h2>";
          // if (json.title === 'undefined'){
          //   results += '<h3>FOUND UNDEFINED ' +  "</h3>";
          // }
        results += '<h3>Episode ' + json.episode_id + "</h3>";
        results += '<h4>Directed by ' + json.director + "</h4>";
        results += '<h4>Produced by ' + json.producer + "</h4>";
        results += '<div class="crawler"><p>' + json.opening_crawl + "</p></div>";
      }
      if (type === 'people'){
        if (number < 1 || number > 83) {
          results += '<h1>PLEASE ENTER VALID OPTION</h1>';
          document.getElementById("fetchResults").innerHTML = results;
          return;
        }
        results += '<hr><h2>You have chosen: ' + json.name + " </h2>";
        results += '<h4>Gender: ' + json.gender + "</h4>";
        results += '<h4>Height: ' + json.height + " cm</h4>";
        results += '<h4>Hair color: ' + json.hair_color + "</h4>";
        results += '<h4>Birth year: ' + json.birth_year + "</h4>";
        results += '<h4>Skin color: ' + json.skin_color + '</h4>';
      }
      if (type === 'planets'){
        if (number < 1 || number > 60) {
          results += '<h1>PLEASE ENTER VALID OPTION</h1>';
          document.getElementById("fetchResults").innerHTML = results;
          return;
        }
        results += '<hr><h2>You have chosen: ' + json.name + " </h2>";
        results += '<h4>Diameter: ' + json.diameter + " km</h4>";
        results += '<h4>Rotation Period (Length of Day): ' + json.rotation_period + " hours</h4>";
        results += '<h4>Orbital Period (Length of Year): ' + json.orbital_period + " days</h4>";
        results += '<h4>Surface Water: ' + json.surface_water + " %</h4>";
        results += '<h4>Population: ' + json.population + '</h4>';
        results += '<h4>Climate: ' + json.climate + '</h4>';
        results += '<h4>Terrain: ' + json.terrain + '</h4>';
      }
      if (type === 'species'){
        if (number < 1 || number > 37) {
          results += '<h1>PLEASE ENTER VALID OPTION</h1>';
          document.getElementById("fetchResults").innerHTML = results;
          return;
        }
        results += '<hr><h2>You have chosen: ' + json.name + " </h2>";
        results += '<h4>Classification: ' + json.classification + "</h4>";
        results += '<h4>Average Height: ' + json.average_height + " cm</h4>";
        results += '<h4>Average Lifespan: ' + json.average_lifespan + " years</h4>";
        results += '<h4>Hair Colors: ' + json.hair_colors + "</h4>";
        results += '<h4>Skin Colors: ' + json.skin_colors + '</h4>';
        results += '<h4>Spoken language: ' + json.language + '</h4>';
      }

      document.getElementById("fetchResults").innerHTML = results;
     });

     // const url2 = "http://api.openweathermap.org/data/2.5/forecast?q="
     //  + value + ", US&units=imperial" + "&APPID=d30939081cd48a80fe22c67919ce0305";
     //   fetch(url2)
     //     .then(function(response) {
     //       return response.json();
     //     }).then(function(json) {
     //       let forecast = "";
     //       forecast += "<div class='subcontainer'>";
     //       let date = moment(json.list[0].dt_txt).format('MMMM Do YYYY');
     //       for (let i=0; i < json.list.length; i++) {
     //          forecast += "<div class='fcItem'> ";
     //
     //          if (moment(json.list[i].dt_txt).format('MMMM Do YYYY') != date){
     //            forecast += "<div class='H8'>";
     //            forecast += "<h2>" + moment(json.list[i].dt_txt).format('MMMM Do YYYY') + "</h2>";
     //            forecast += "</div>";
     //            date = moment(json.list[i].dt_txt).format('MMMM Do YYYY');
     //          }
     //
     //          else {
     //            forecast += "<h2>" + moment(json.list[i].dt_txt).format('MMMM Do YYYY') + "</h2>";
     //          }
     //
	   //          // forecast += "<h2>" + moment(json.list[i].dt_txt).format('MMMM Do YYYY') + "</h2>";
     //          forecast += "<h3>" + moment(json.list[i].dt_txt).format('h:mm a') + "</h3>";
     //
    	//         forecast += '<img src="http://openweathermap.org/img/w/' + json.list[i].weather[0].icon + '.png" width="100px"/>'
     //          forecast += "<h3>" + json.list[i].main.temp + " &deg;F</h3>";
     //          forecast += '<h4>Feels like ' + json.list[i].main.feels_like + " &deg;F</h4>";
     //          forecast += '<h4>Wind speed: ' + json.list[i].wind.speed + " mph</h4>";
     //          forecast += '<h4>Wind direction: ' + json.list[i].wind.deg + "&deg;</h4>";
     //          forecast += '<h4>Humidity: ' + json.list[i].main.humidity + "%</h4>";
     //
     //          // if(moment(json.list[i].dt_txt).format('Do') % 2 == 0)
     //
     //          forecast += "</div>";
     //        }
     //        forecast += "</div>";
     //  document.getElementById("forecastResults").innerHTML = forecast;
     //     });
});

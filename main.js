let catPicB = document.querySelector(".catPicB");
catPicB.addEventListener("click", () => {
  $("#image").append(
    '<img class="rounded-circle" src="images/high-five.gif">'
  );
  $(".highFive").html("High five! You're building your first web app!");
});


$(document).ready(function () {
  getWeather();
});

function getWeather(searchQuery) {
  if (searchQuery === "" || searchQuery === undefined) {
    $(".error-message").text("");
    return;
  }

  // var url="https://api.openweathermap.org/data/2.5/weather?lat=23.622641&lon=90.499794&appid=26ddbaac9e6c359a53b14b7a202b5011&units=metric"

  // var url="https://api.openweathermap.org/data/2.5/weather?lat=42.3601&lon=71.0589&appid=26ddbaac9e6c359a53b14b7a202b5011"

  var url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    searchQuery +
    "&appid=26ddbaac9e6c359a53b14b7a202b5011&units=metric";
  // var url = "http://api.openweathermap.org/data/2.5/weather?q=Narayanganj&appid=26ddbaac9e6c359a53b14b7a202b5011&units=metric";

  $.ajax(url, {
    success: function (data) {
      console.log(data);
      // $(".city").text(data.name);
      // $(".temp").text(data.main.feels_like);
      // $(".city").text( "Temperature of "+data.name+" "+data.main.temp+"°C");
      $(".temp").text(data.main.temp + "°C");
      $(".error-message").text("");
    },
    error: function (error) {
      $(".error-message").text("Can't find the city");
      $(".city").text("");
      $(".temp").text("");
    },
  });
}

// function searchWeather() {
//   var searchQuery = $(".search").val();
//   getWeather(searchQuery);
// }
let weatherBtn=document.getElementById("weatherBtn");
weatherBtn.addEventListener("click",()=>{
  var searchQuery = $(".search").val();
  getWeather(searchQuery);
})


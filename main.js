let catPicB = document.querySelector(".catPicB");
catPicB.addEventListener("click", () => {
  $("#image").append('<img class="rounded-circle" src="images/high-five.gif">');
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

  
  var apiKey = process.env.API_KEY;
  // var apiKey = window.API_KEY;

  var url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    searchQuery +
    "&appid=" +
    apiKey +
    "&units=metric";

  $.ajax(url, {
    success: function (data) {
      console.log(data);

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

let weatherBtn = document.getElementById("weatherBtn");
weatherBtn.addEventListener("click", () => {
  var searchQuery = $(".search").val();
  getWeather(searchQuery);
});

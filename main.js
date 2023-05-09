let catPicB = document.querySelector(".catPicB");
catPicB.addEventListener("click", () => {
$("#image").append('<img class="rounded-circle" src="images/high-five.gif">');
  $(".highFive").html("High five! You're building your first web app!");
});
// require('dotenv').config()

$(document).ready(function () {
  getWeather();
});

function getWeather(searchQuery) {
  if (searchQuery === "" || searchQuery === undefined) {
    $(".error-message").text("");
    return;
  }


let apiKey;

// Fetch the API key from the serverless function
fetch('/.netlify/functions/api-key')
  .then((response) => response.json())
  .then((data) => {
    apiKey = data.apiKey;
    // Call any function that relies on the API key
    exampleFunction();
  })
  .catch((error) => {
    console.error('Error fetching API key:', error);
  });

function exampleFunction() {
  // Use the apiKey variable in your code
  console.log(apiKey);
  // Rest of your code
}


  var url =`https://api.openweathermap.org/data/2.5/weather?q= ${searchQuery} +&appid=${apiKey}units=metric`;



 
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

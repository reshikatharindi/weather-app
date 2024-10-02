const cityInput = document.querySelector(".city-input");
const searchButton = document.querySelector(".search-btn");


const API_KEY="fda";


const getCityCoodinate = () => {
    const cityName =cityInput.value.trim();//get user entered city name and remove extra spaces
if(!cityName) return;//return if cityname is empty

// console.log(cityName)
const WEATHER_API_URL= `http://api.weatherapi.com/v1/search.json?key=fda&q=${cityName}
`;
fetch(WEATHER_API_URL).then(res.json()).then(data => {
    console.log(data)
}).catch(() => {
    alert("an error occurred while fetching the coordinates")
})
}

searchButton.addEventListener("click" , getCityCoodinates);
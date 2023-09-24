fetch("http://api.weatherapi.com/v1/current.json?key=a6e57a8225de486bacd153636232409&q=Amsterdam)").then(
    response => response.json()
).then(data => {
    setData(data);
    return data;
});

let place = document.getElementById("js--weather-place");
let tempc = document.getElementById("js--weather-temp");

const setData = (data) => {
    console.log(place);
    place.innerText = data.location.name;
    tempc.innerText = data.current.temp_c + "°";

}

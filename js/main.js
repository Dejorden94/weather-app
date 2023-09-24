fetch("http://api.weatherapi.com/v1/current.json?key=a6e57a8225de486bacd153636232409&q=Amsterdam)").then(
    response => response.json()
).then(data => {
    setData(data);
    return data;
});

let place = document.getElementById("js--weather-place");
let tempc = document.getElementById("js--weather-temp");
let condi = document.getElementById("js--weather-condtion");
let icon = document.getElementById("js--weather-icon");

let humi = document.getElementById("js--weather-humidity");

const setData = (data) => {
    place.innerText = data.location.name;
    tempc.innerText = data.current.temp_c + "°";
    condi.innerText = data.current.condition.text;

    icon.setAttribute("src", data.current.condition.icon);

    humi.innerText = data.current.humidity;
}

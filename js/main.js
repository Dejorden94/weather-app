fetch("http://api.weatherapi.com/v1/current.json?key=a6e57a8225de486bacd153636232409&q=Amsterdam)").then(
    response => response.json()
).then(data => {
    setData(data);
    return data;
});

const setData = (data) => {

}

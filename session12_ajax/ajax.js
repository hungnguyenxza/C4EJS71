

let http = new XMLHttpRequest();
http.open("GET", "https://weather-data-demo.herokuapp.com/get-weather-week");
http.onreadystatechange = function () {
    if (this.readyState === 4
        && this.status === 200) {

        console.log(this.responseText);

        let data = JSON.parse(this.responseText);
        console.log(data);

        document.getElementById("date").innerHTML = data.date;
        document.getElementById("temperature").innerHTML = data.temperature + data.unit;
        document.getElementById("humidity").innerHTML = data.humidity;

    }
}

http.send();
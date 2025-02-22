
function weather() {
    const name = document.getElementById('input').value

    const response = fetch("https://api.openweathermap.org/data/2.5/weather?q=" + name + "&appid=bfb12dd01a60ae5bd8c4e6c3e73af357")


        .then((response) => {
            const data = response.json()
            return data
        }).then((data) => {
            console.log(data)
            const currentDate = new Date();
            document.getElementById('place').innerText=data.name
            document.getElementById('temp').innerText=Math.floor(data.main.temp)-273+"°C"
            document.getElementById('description').innerText=data.weather[0].description.toUpperCase()  
            document.getElementById('para').innerText="Feels Like "+(Math.floor(data.main.feels_like)-273)+"°C"
            document.getElementById('fl').innerText=(Math.floor(data.main.feels_like)-273)+"°C"
            document.getElementById('humidity').innerText=data.main.humidity
            document.getElementById('visi').innerText=data.visibility/1000+"KM"
            document.getElementById('pressure').innerText=data.main.pressure
            document.getElementById('uv').innerText="weaker"
            document.getElementById('force').innerText="Force3"
            


            

        }).catch(() => {
            console.log("something went wrong")
        })
        



}


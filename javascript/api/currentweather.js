var CURRENT_WEATHER_TOKEN = 'bda1e10853d01663bd1b4e6cad38abc9'
//Search and fetch
var inputbox = document.getElementById('search')
inputbox.onclick = function() {
    document.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            //Check whether there is value or not
            if(inputbox.value) {
                
                //First fetch API
                fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputbox.value}&appid=${CURRENT_WEATHER_TOKEN}&units=metric`)
                    .then(response => response.json())
                    .then(data => {
                        console.log(data)

                        //Declare all variables
                        let cname           = data['name']
                        let what            = data['weather'][0]['main']
                        let description     = data['weather'][0]['description']
                        let icon            = `<img 
                                                src='http://openweathermap.org/img/wn/${data['weather'][0]['icon']}.png'
                                                style="width: 200px; height: 200px;"></img>`
                        let humidity        = data['main']['humidity']
                        let temp            = data['main']['temp']
                        let feelslike       = data['main']['feels_like']
                        let wind            = data['wind']['speed']

                        //Add some styling to stuff that was not visible before
                        document.getElementById('qa').style.display             = "flex"
                        document.getElementById('q').style.display              = "block"
                        document.getElementById('line').style.display           = "block"

                        //Declare and InnerHTML that bitches
                        document.getElementById('place').innerHTML              = `${cname}`
                        document.getElementById('type').innerHTML               = `${what} ` + `(${description})`
                        document.getElementById('degrees').innerHTML            = `${temp}` 
                        document.getElementById('feelslike').innerHTML          = `${feelslike}`
                        document.getElementById('wind').innerHTML               = `${wind} km/h`
                        document.getElementById('humidity').innerHTML           = `${humidity}`
                        document.getElementById('wtimg').innerHTML              = `${icon}`

                        //Testing
                        console.log(cname, what, humidity, temp, feelslike, wind, description)
                    })
                    .catch(err => console.error(err));     
            }else { return }              
        }
    });
}
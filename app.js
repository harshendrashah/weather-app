const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')

const location = process.argv[2]

if(!location) {
    console.log("Please provide a location!")
} else {
    geocode(location, (error, data) => {
        if(error)
            return console.log(error)   
        forecast(data.latitude, data.longitude, (error, forecastData) => {
            if(error)
                return console.log(error)
            console.log(data.location)
            console.log(forecastData)
        })
    })
}
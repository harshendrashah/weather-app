const request = require('request')
const keys = require('./private_keys.json') // Create a json file for your private_keys

const url = 'https://api.darksky.net/forecast/' + keys.darkskyApiKey + '/37.8267,-122.4233?units=si'

request({ url: url, json: true }, (error, response) => {
    if (error) {
        console.log("Unable to connect to weather services!")
    } else if (response.body.error) {
        console.log('Unable to find location')
    } else {
        console.log(response.body.daily.data[0].summary + " It is currently " + response.body.currently.temperature + " degrees out. There is " + response.body.currently.precipProbability + "% chance of rain.")
    }
})

// Geocoding

const geocodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/philadelphia.json?access_token=' + keys.mapboxApiAccessToken + "&limit=1"

request({ url: geocodeUrl, json: true}, (error, response) => {
    if (error) {
        console.log("Unable to connect to location services!")
    } else if (response.body.features.length === 0) {
        console.log('Unable to find location')
    } else {
        const longitude = response.body.features[0].center[0]
        const latitude = response.body.features[0].center[1]
        console.log(latitude, longitude)
    }
})
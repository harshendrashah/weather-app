const request = require('request')
const keys = require('./private_keys.json')  // Create a json file for your private_keys

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/' + keys.darkskyApiKey + '/' + latitude + ',' + longitude + '?units=si'

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather services!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, response.body.daily.data[0].summary 
                + ' It is currently ' 
                + response.body.currently.temperature 
                + ' degrees out. There is ' 
                + response.body.currently.precipProbability 
                + '% chance of rain.')
        }
    })
}

module.exports = forecast
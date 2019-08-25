const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/340377319c821df51abfcc91a72cecb8/' + latitude + ',' + longitude + '?units=si'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather services!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary 
                + ' It is currently ' 
                + body.currently.temperature 
                + ' degrees out. There is ' 
                + body.currently.precipProbability 
                + '% chance of rain.')
        }
    })
}

module.exports = forecast
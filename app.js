const request = require('request')

const url = 'https://api.darksky.net/forecast/340377319c821df51abfcc91a72cecb8/37.8267,-122.4233?units=si'

request({ url: url, json: true }, (error, response) => {
    console.log(response.body.daily.data[0].summary + " It is currently " + response.body.currently.temperature + " degrees out. There is " + response.body.currently.precipProbability + "% chance of rain.")
})
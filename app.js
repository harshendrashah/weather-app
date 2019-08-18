const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')

geocode('Philadelphia', (error, data) => {
    console.log(error)
    console.log(data)
})

forecast(-75, 44, (error, data) => {
    console.log(error)
    console.log(data)
})
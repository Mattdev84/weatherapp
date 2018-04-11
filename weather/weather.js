const request = require('request')

let getWeather = (long, lat, callback) => {
    request({
        url: `https://api.darksky.net/forecast/36305fc1d8e50ca64a78f1a90239ecc8/${long},${lat}`,
        json: true
    },(error, response, body)=>{
        if(!error && response.statusCode===200)
        {
            callback(undefined, {
                summary : body.currently.summary,
                temperature : body.currently.temperature,
                precipProbability : body.currently.precipProbability,
                windspeed: body.currently.windSpeed
            } )
        }
        else {
            callback('Unable to fetch weather')
        }
    })
}


module.exports = {
    getWeather
}

